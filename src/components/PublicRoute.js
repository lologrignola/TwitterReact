import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import auth from "../auth";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const TOKEN_KEY = useSelector((state) => state.jwt);
  console.log("*********", TOKEN_KEY);
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        auth("isLogin", TOKEN_KEY) && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
