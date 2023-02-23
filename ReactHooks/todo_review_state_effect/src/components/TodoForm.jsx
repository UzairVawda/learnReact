import React, { useState } from "react";

export default function TodoForm(props) {
  const [todoItem, setTodoItem] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setTodoItem(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const updatedTodo = {
      id: Math.floor(Math.random() * 10000),
      text: todoItem,
    };
    props.addTodoItem(updatedTodo);
    setTodoItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        name="todo"
        className="todo-input"
        type="text"
        placeholder="Enter todo item"
        value={todoItem}
        onChange={handleChange}
      />
      <button type="submit" className="todo-button">
        Add ToDo Item
      </button>
    </form>
  );
}
