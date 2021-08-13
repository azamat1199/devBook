import React from "react";
import { Redirect } from "react-router";
import { Redirect } from "react-router-dom";

function withAuthorization(props) {
  console.log(props);
  const user = JSON.parse(localStorage.user);
  const token = localStorage.getItem("token");

  if (token) {
    return props.children;
  }
  return <Redirect to="/sign-in" />;
}

export default withAuthorization;
