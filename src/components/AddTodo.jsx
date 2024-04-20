import React from "react";
import { useState } from "react";

export default function AddTodo({ onAddTodo, onResetTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
      <button onClick={onResetTodo}>Reset</button>
    </>
  );
}
