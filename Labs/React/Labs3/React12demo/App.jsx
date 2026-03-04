import React, { useState, createContext } from "react";
import TodoList from "./components/TodoList";
import "./style.css";

export const TodoContext = createContext();

export default function App() {
  function TodoProvider({ children }) {
    const [todos, setTodos] = useState([
      { id: 1, title: "Learn React useState", isComplete: true },
      { id: 2, title: "Learn React useEffect", isComplete: true },
      { id: 3, title: "Learn React useContext", isComplete: false },
    ]);

    function toggleTodo(id) {
      setTodos((prev) =>
        prev.map((todo) => ({
          ...todo,
          isComplete: todo.id === id ? !todo.isComplete : todo.isComplete,
        })),
      );
    }

    const contextValue = { todos, toggleTodo };

    return (
      <TodoContext.Provider value={contextValue}>
        {children}
      </TodoContext.Provider>
    );
  }

  return (
    <main>
      <h1>☑️ Todo List</h1>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </main>
  );
}
