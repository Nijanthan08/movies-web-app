import { blobToBase64String } from "blob-util";

// export const getBlobContent = async url => {
//   const base64Img = await image2base64(url);
//   return base64StringToBlob(base64Img);
// };

export const imageToBase64 = async image => {
  return await blobToBase64String(image);
};

export const isJsonObjEmpty = obj => {
  return Object.keys(obj).length === 0;
};
