import { httpPost } from "./httpServices";
import lodash from "lodash";
import { setTokenToCookie } from "./../util/authentication";

export const addUser = async data => {
  await httpPost(
    "api/users",
    lodash.pick(data, ["firstName", "lastName", "emailId", "password"])
  );
};

export const login = async req => {
  const { data } = await httpPost("api/users/login", req);
  setTokenToCookie(data.token);
  return lodash.pick(data, ["id", "firstName", "lastName", "emailId", "admin"]);
};
