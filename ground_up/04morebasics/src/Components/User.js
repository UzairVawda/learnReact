import React from "react";
import UserHoc from "./HOC/UserHoc";

const User = () => {
  return <div>User</div>;
};

export default UserHoc(User, "hello i am");
