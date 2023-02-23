import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function TodoItem({
  todoItems,
  deleteTodoItem,
  getEditTodoData,
}) {
  return todoItems.map((item, index) => (
    <div className="todo-item-wrapper" key={item.id}>
      <p className="todo-text">{item.text}</p>
      <RiCloseCircleLine
        className="delete-icon"
        onClick={() => deleteTodoItem(item)}
      />
      <TiEdit className="edit-icon" onClick={() => getEditTodoData(item)} />
    </div>
  ));
}
