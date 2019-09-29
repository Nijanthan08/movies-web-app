import axios from "axios";
import { apiEndPoint } from "../util/config.json";
import { getTokenFromCookie } from "../util/authentication.jsx";
import { AUTH_TOKEN } from "./../util/authentication";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  console.log(error);
  if (!error.response) {
    toast.info("Service Unavailable !!!");
    return { status: 503, data: [] };
  }

  const { status, data } = error.response;
  if (data) toast.error(data);
  return { status, data: [] };
});

axios.defaults.headers.post[AUTH_TOKEN] = getTokenFromCookie();

export const httpPost = async (requestMapping, requestBody) => {
  return await axios.post(apiEndPoint + requestMapping, requestBody);
};

export const httpGet = async requestMapping => {
  return await axios.get(apiEndPoint + requestMapping);
};
