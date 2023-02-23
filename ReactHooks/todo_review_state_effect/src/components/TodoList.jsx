import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [allTodos, setAllTodos] = useState([]);
  function addTodoItem(todo) {
    const newTodos = [...allTodos];
    const todoItemId = newTodos.findIndex((item) => item.id === todo.id);
    console.log(todoItemId);
    if (todoItemId === -1) {
      newTodos.push(todo);
    }
    setAllTodos(newTodos);
  }
  console.log(allTodos);
  return (
    <div>
      TodoList
      <TodoForm addTodoItem={addTodoItem} />
      <TodoItem todoItems={allTodos} />
    </div>
  );
}
