import Die from "./components/Die"
import React, { useState, useEffect } from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

function App() {
  const [dieValues, setDieValues] = useState(allNewDice())
  const [tenzies, setTenzies] = useState(false)

  function allNewDice() {
    const die =[]
    for(var i=0; i<10; i++) {
      die.push(newDie())
    }
    return die
  }
  
  function rollDice() {
    if (tenzies) {
      setDieValues(allNewDice())
      setTenzies(false)
    } else {
      setDieValues((prevVal) => prevVal.map((die) => {
        return die.isHeld ? die : newDie()
      }))
    }
  }

  function holdDie(id) {
    setDieValues((prevVal) => prevVal.map((die) => {
      return die.id === id ? 
        {
          ...die, 
          isHeld : !die.isHeld
        }
        : die
      
    }))
  }

  function newDie() {
    return {
      id : nanoid(),
      value : Math.ceil(Math.random() * 6),
      isHeld : false
    }
  }
  
  useEffect(() => {
    const allHeld = dieValues.every(die => die.isHeld )
    const allSameValue = dieValues.every(die => die.value === dieValues[0].value )
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dieValues])

  const dieElements = dieValues.map((die) => <Die key={die.id} value={die.value} held={die.isHeld} holdDie={() => holdDie(die.id)}/>)

  return (
		<main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls. </p>
			<section className="dieContainer">
				{dieElements}
			</section>
      <button className="rollDie" onClick={rollDice}>{tenzies ? "RESET GAME" : "Roll"}</button>
		</main>
  );
}

export default App;
