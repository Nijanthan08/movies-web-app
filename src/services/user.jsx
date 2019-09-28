import { httpPost } from "./httpServices";
import lodash from "lodash";

export const addUser = async data => {
  await httpPost(
    "api/users",
    lodash.pick(data, ["firstName", "lastName", "emailId", "password"])
  );
};

export const login = async req => {
  try {
    return await httpPost("api/users/login", req);
  } catch (error) {
    console.log(error);
    return { status: 403 };
  }
};
