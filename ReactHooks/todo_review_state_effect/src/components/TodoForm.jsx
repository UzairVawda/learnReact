import React, { useEffect, useState } from "react";

export default function TodoForm({ addTodoItem, editData }) {
  const [todoItem, setTodoItem] = useState("");
  const [isEditMode, setIsEditMode] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setTodoItem(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const updatedTodo = {
      id: isEditMode ? editData.id : Math.floor(Math.random() * 10000),
      text: todoItem,
    };
    addTodoItem(updatedTodo);
    setTodoItem("");
    setIsEditMode(false);
  }

  useEffect(() => {
    if (editData && Object.keys(editData).length !== 0) {
      setTodoItem(editData.text);
      setIsEditMode(true);
    }
  }, [editData]);

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
        {isEditMode ? "Update ToDo Item" : "Add ToDo Item"}
      </button>
    </form>
  );
}
