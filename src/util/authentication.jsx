import cookie from "react-cookies";

const AUTH_TOKEN = "AUTH-TOKEN";

export const setTokenToCookie = value => {
  cookie.save(AUTH_TOKEN, value);
};
