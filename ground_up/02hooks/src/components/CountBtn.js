import React, { memo } from "react";

export default memo(function CountBtn({ handleCount }) {
  console.log("3-COUNT_BTN");
  return (
    <>
      <button onClick={handleCount}>Add 1</button>
    </>
  );
});
