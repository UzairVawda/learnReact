import React from "react";

const UserHoc = (WrappedComponent, arg1) => {
  return (props) => (
    <>
      <WrappedComponent />
      {arg1}
    </>
  );
};

export default UserHoc;
