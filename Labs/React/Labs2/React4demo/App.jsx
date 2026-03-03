import React from "react";
import "./style.css";
import TodoItem from "./components/TodoItem";
import todos from "./todos.json";

export default function App() {
  return (
    <main>
      <h1>To-do List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem title={todo.title} key={todo.id} />
        ))}
      </ul>
    </main>
  );
}
