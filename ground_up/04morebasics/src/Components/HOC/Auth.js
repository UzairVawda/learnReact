import React from "react";

const Auth = (props) => {
  const pass = "testingPass";

  if (pass !== "testingPss") {
    return <h3>Not Authorized</h3>;
  } else {
    return props.children;
  }
};

export default Auth;
