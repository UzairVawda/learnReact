import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Posts from "./components/Posts";
import Profile from "./components/Profile";
import PostItem from "./components/PostItem";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostItem />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" render={() => <h3>OOPS, NOT FOUND</h3>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
