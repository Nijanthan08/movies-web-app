import axios from "axios";
import { apiEndPoint } from "../util/config.json";
import { getTokenFromCookie } from "../util/authentication.jsx";
import { AUTH_TOKEN } from "./../util/authentication";

axios.defaults.headers.post[AUTH_TOKEN] = getTokenFromCookie();

export const httpPost = async (requestMapping, requestBody) => {
  return await axios.post(apiEndPoint + requestMapping, requestBody);
};

export const httpGet = async requestMapping => {
  return await axios.get(apiEndPoint + requestMapping);
};
