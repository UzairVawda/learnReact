import React, { useRef } from "react";
import InputComponent from "./components/InputComponent";

export default function App() {
  const inputText = useRef();

  function triggerHandler() {
    console.log(inputText.current.value);
  }

  return (
    <>
      <h1>hello world</h1>
      <InputComponent ref={inputText} />
      <button onClick={triggerHandler}>trigger</button>
    </>
  );
}
