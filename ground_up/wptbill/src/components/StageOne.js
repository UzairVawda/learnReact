import React, { useState, useRef, useContext } from "react";
import { MyContext } from "../context/Index";
import { Button, Alert, Form } from "react-bootstrap";

const StageOne = () => {
  const textInput = useRef();
  const [error, setError] = useState([false, ""]);
  const context = useContext(MyContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const isValid = ValidateUserName(value);
    if (isValid) {
      context.addPlayer(value);
      setError([false, ""]);
      textInput.current.value = "";
    }
  };

  const ValidateUserName = (username) => {
    if (username === "") {
      setError([true, "Username cannot be empty!"]);
      return false;
    }
    if (username.length <= 5) {
      setError([true, "Username must be longer than 5 characters!"]);
      return false;
    }
    return true;
  };
  return (
    <>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group>
          {error[0] && <Alert variant="danger">{error[1]}</Alert>}
          <Form.Control
            type="text"
            placeholder="Add Player Name"
            name="playerName"
            ref={textInput}
          />
        </Form.Group>
        <Button type="submit" variant="primary" className="miami mt-4">
          Add Player
        </Button>
      </Form>
      {context.players && context.players.length > 0 ? (
        <>
          <hr />
          <div>
            <ul className="list-group">
              {context.players.map((player, i) => (
                <li
                  key={i}
                  className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                >
                  {player}
                  <span
                    className="badge badge-danger"
                    onClick={() => context.removePlayer(player)}
                  >
                    x
                  </span>
                </li>
              ))}
            </ul>
            <div className="action_button" onClick={() => context.next()}>
              NEXT
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default StageOne;
