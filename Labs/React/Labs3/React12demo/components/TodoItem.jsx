import React, { useContext } from "react";
import { TodoContext } from "../App";

export default function TodoItem({ todo }) {
  const { toggleTodo } = useContext(TodoContext);

  return (
    <li
      onClick={() => toggleTodo(todo.id)}
      className={todo.isComplete ? "complete" : ""}
    >
      {todo.title}
    </li>
  );
}
