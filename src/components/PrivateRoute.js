import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import auth from "../auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const TOKEN_KEY = useSelector((state) => state.jwt);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={(props) =>
        auth("isLogin", TOKEN_KEY) ? <Component {...props} /> : <Redirect to="/welcome" />
      }
    />
  );
};

export default PrivateRoute;
