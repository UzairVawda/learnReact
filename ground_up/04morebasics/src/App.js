import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdjacentComp from "./Components/AdjacentComp";
import FuncPureComp from "./Components/FuncPureComp";
// import Header from "./Components/Header";
import User from "./Components/User";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import PureComp from "./Components/PureComp";
import TransitionHeader from "./Components/TransitionComponents/header";
import CssTr from "./Components/TransitionComponents/CSStransition";
import Tgroup from "./Components/TransitionComponents/Tgroup";
import TransitionComp from "./Components/TransitionComponents/Transition";
const App = () => {
  return (
    <Router>
      <div>
        <TransitionHeader />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pureComp" element={<PureComp />} />
          <Route path="/funcpureComp" element={<FuncPureComp />} />
          <Route path="/adjcomp" element={<AdjacentComp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/transition" element={<TransitionComp />}></Route>
          <Route path="/csstransition" element={<CssTr />}></Route>
          <Route path="/tgroup" element={<Tgroup />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
