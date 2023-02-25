import React, { useCallback, useState } from "react";
import Count from "./components/Count";
import Title from "./components/Title";
import CountBtn from "./components/CountBtn";
import Age from "./components/Age";
import AgeBtn from "./components/AgeBtn";

export default function App({ initialCount }) {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(0);
  const handleCount = useCallback(() => {
    setCount((prevVal) => prevVal + 1);
  }, []);
  const handleAge = useCallback(() => {
    setAge((prevVal) => prevVal + 1);
  }, []);
  return (
    <>
      <Title />
      <Count count={count} />
      <CountBtn handleCount={handleCount} />
      <Age age={age} />
      <AgeBtn handleAge={handleAge} />
    </>
  );
}
