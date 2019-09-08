import image2base64 from "image-to-base64";
import { base64StringToBlob } from "blob-util";

export const getBlobContent = async url => {
  const base64Img = await image2base64(url);
  return base64StringToBlob(base64Img);
};
