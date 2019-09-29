import { httpPost } from "./httpServices";
import _ from "lodash";

export const addUser = async data => {
  await httpPost(
    "api/users",
    _.pick(data, ["firstName", "lastName", "emailId", "password"])
  );
};

export const login = async req => {
  return await httpPost("api/users/login", req);
};
