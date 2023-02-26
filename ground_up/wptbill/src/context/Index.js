import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const MyContext = createContext();

const MyProvider = (props) => {
  const [stage, setStage] = useState(1);
  const [players, setPlayers] = useState([]);
  const [result, setResult] = useState("");

  function addPlayer(player) {
    setPlayers((prevVal) => [...prevVal, player]);
  }

  function removePlayer(player) {
    const updatedPlayers = players.filter(
      (playerName) => player !== playerName
    );
    setPlayers(updatedPlayers);
  }

  function generateLoser() {
    setResult(players[Math.floor(Math.random() * players.length)]);
  }

  function next() {
    if (players.length < 2) {
      toast.error("Need more than 1 players", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 2000,
      });
    } else {
      setStage(2);
      setTimeout(() => {
        generateLoser(0);
      }, 2000);
    }
  }

  function reset() {
    setStage(1);
    setPlayers([]);
    setResult("");
  }

  return (
    <MyContext.Provider
      value={{
        stage,
        players,
        result,
        addPlayer,
        removePlayer,
        next,
        generateLoser,
        reset,
      }}
    >
      {props.children}
      <ToastContainer />
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };
