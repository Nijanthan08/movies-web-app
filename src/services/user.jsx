import { httpPost } from "./httpServices";
import lodash from "lodash";

export const addUser = async data => {
  await httpPost(
    "api/users",
    lodash.pick(data, ["firstName", "lastName", "emailId", "password"])
  );
};

export const login = async data => {
  await httpPost("api/users/login", data);
};
