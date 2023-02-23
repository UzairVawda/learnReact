import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

export default function TodoItem(props) {
  return props.todoItems.map((item, index) => (
    <div className="todo-item-wrapper" key={item.id}>
      <p className="todo-text">{item.text}</p>
      <RiCloseCircleLine className="delete-icon" />
      <TiEdit className="edit-icon" />
    </div>
  ));
}
