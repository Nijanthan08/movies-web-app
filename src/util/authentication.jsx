import cookie from "react-cookies";
import jwtDecode from "jwt-decode";

export const AUTH_TOKEN = "X-AUTH-TOKEN";

export const decodeToken = () => {
  const token = getTokenFromCookie();
  try {
    if (token) return jwtDecode(token);
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const setTokenToCookie = value => cookie.save(AUTH_TOKEN, value);

export const getTokenFromCookie = () => cookie.load(AUTH_TOKEN);
