import React, { useContext } from "react";
import { MyContext } from "./context/Index";
import "bootstrap/dist/css/bootstrap.min.css";
import StageOne from "./components/StageOne";
import StageTwo from "./components/StageTwo";
import "./App.css";

const App = () => {
  const context = useContext(MyContext);

  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <h1>Who pays the bill</h1>
        {context.stage === 1 ? <StageOne /> : <StageTwo />}
      </div>
    </div>
  );
};

export default App;
