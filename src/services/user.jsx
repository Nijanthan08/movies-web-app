import { httpPost } from "./httpServices";
import _ from "lodash";

export const addUser = async data => {
  await httpPost(
    "api/users",
    _.pick(data, ["firstName", "lastName", "emailId", "password"])
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
