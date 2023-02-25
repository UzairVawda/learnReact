import React, { memo } from "react";

export default memo(function Title() {
  console.log("1-TITLE");
  return (
    <>
      <h1>My APP</h1>
      <hr />
    </>
  );
});
