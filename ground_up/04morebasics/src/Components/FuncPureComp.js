import React, { useState } from "react";

const FuncPureComp = () => {
  console.log("rendered");
  const [name, setName] = useState("uzair");
  return (
    <>
      <h3>Functional Pure Component with memo</h3>
      <p>
        memo is to be used if props are changing but by default functional
        components don't re render
      </p>
      <h3>{name}</h3>
      <button onClick={() => setName("Uzair")}>CLICK TO CHANGE</button>
    </>
  );
};

export default FuncPureComp;
