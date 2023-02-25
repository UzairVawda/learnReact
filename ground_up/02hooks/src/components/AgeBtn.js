import React, { memo } from "react";

export default memo(function AgeBtn({ handleAge }) {
  console.log("5-AGE_BTN");
  return (
    <>
      <button onClick={handleAge}>Update Age</button>
    </>
  );
});
