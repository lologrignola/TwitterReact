import { useSelector } from "react-redux";

import React from "react";

function auth(action, value) {
  const login = () => {
    localStorage.setItem(value, "TestLogin");
  };

  const logout = () => {
    localStorage.removeItem(value);
  };

  const isLogin = () => {
    if (localStorage.getItem(value)) {
      return true;
    }

    return false;
  };

  if (action === "login") login(value);
  if (action === "logout") logout(value);
  if (action === "isLogin") isLogin(value);
}

export default auth;
