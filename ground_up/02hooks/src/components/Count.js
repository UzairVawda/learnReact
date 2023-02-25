import React, { memo } from "react";

export default memo(function Count({ count }) {
  console.log("2-COUNT");
  return <h3>Count: {count}</h3>;
});
