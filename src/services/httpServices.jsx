import axios from "axios";
import { apiEndPoint } from "../util/config.json";

export const httpPost = async (requestMapping, requestBody) => {
  return await axios.post(apiEndPoint + requestMapping, requestBody);
};

export const httpGet = async requestMapping => {
  return await axios.get(apiEndPoint + requestMapping);
};
