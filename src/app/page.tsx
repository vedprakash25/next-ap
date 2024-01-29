"use client";

import React, { useState } from "react";
import Todo from "./components/todo";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="bg-blue-300 rounded p-10">
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTodo}
        className="rounded-sm border-2 p-2"
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="rounded-sm border-2 ml-2 p-2" onClick={handleAddTodo}>
        Add Todo
      </button>
      <div className="mt-4">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            todo={todo}
            onDelete={() => handleDeleteTodo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
