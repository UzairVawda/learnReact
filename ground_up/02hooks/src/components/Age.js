import React, { memo } from "react";

export default memo(function age({ age }) {
  console.log("4-AGE");
  return <h3>Age: {age}</h3>;
});
