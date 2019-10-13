import axios from "axios";
import { apiEndPoint } from "../util/config.json";
import { getTokenFromCookie, AUTH_TOKEN } from "../util/authentication.jsx";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  console.log(error);
  if (!error.response) {
    toast.info("Service Unavailable !!!");
    return { status: 503, data: [] };
  }

  const { status, data } = error.response;
  console.log(error.response);
  if (data) {
    if (typeof data === "string") toast.error(data);
    else toast.error(data.message);
  }
  return { status, data: [] };
});

axios.defaults.headers.post[AUTH_TOKEN] = getTokenFromCookie();

export const httpPost = async (requestMapping, requestBody) => {
  return await axios.post(apiEndPoint + requestMapping, requestBody);
};

export const httpGet = async requestMapping => {
  return await axios.get(apiEndPoint + requestMapping);
};
