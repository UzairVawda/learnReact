import React, { useContext } from "react";
import { MyContext } from "../context/Index";

const StageTwo = () => {
  const context = useContext(MyContext);
  return (
    <>
      <div className="result_wrapper">
        <h3>This loser is:</h3>
        <div>{context.result}</div>
      </div>
      <div className="action_button" onClick={context.reset}>
        START OVER
      </div>
      <div className="action_button btn_2" onClick={context.generateLoser}>
        GET NEW LOSER
      </div>
    </>
  );
};

export default StageTwo;
