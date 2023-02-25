import React, { forwardRef } from "react";

const InputComponent = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default InputComponent;
