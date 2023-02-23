import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [allTodos, setAllTodos] = useState([]);
  const [editData, setEditData] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const localStorageTodos = JSON.parse(localStorage.getItem("todoItems"));
    if (localStorageTodos && localStorageTodos.length)
      setAllTodos(localStorageTodos);
  }, []);

  function addTodoItem(todo) {
    const newTodos = [...allTodos];
    const todoItemId = newTodos.findIndex((item) => item.id === todo.id);
    if (todoItemId === -1) {
      newTodos.push(todo);
    } else {
      newTodos[todoItemId] = {
        ...newTodos[todoItemId],
        text: todo.text,
      };
    }
    setAllTodos(newTodos);
    localStorage.setItem("todoItems", JSON.stringify(newTodos));
  }

  function getEditTodoData(item) {
    setEditData(item);
  }

  function deleteTodoItem(deleteItem) {
    let updatedTodos = [...allTodos];
    updatedTodos = updatedTodos.filter((item) => item.id !== deleteItem.id);
    setAllTodos(updatedTodos);
    localStorage.setItem("todoItems", JSON.stringify(updatedTodos));
  }

  function handleSearchChange(event) {
    const { value } = event.target;
    setSearchValue(value.toLowerCase());
  }

  const filteredTodos =
    allTodos && allTodos.length
      ? allTodos.filter((item) => item.text.toLowerCase().includes(searchValue))
      : [];
  return (
    <div className="todo-list">
      <div className="search-todos-input-wrapper ">
        <h1>Search Todos</h1>
        <input
          className="search-input"
          placeholder="Search Todos"
          name="search"
          type="text"
          onChange={handleSearchChange}
          value={searchValue}
        />
      </div>
      <TodoForm addTodoItem={addTodoItem} editData={editData} />
      {filteredTodos.length ? (
        <TodoItem
          getEditTodoData={getEditTodoData}
          deleteTodoItem={deleteTodoItem}
          todoItems={filteredTodos}
        />
      ) : (
        <p>NO TODOS</p>
      )}
    </div>
  );
}
