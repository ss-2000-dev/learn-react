import React from "react";
import { useState } from "react";
import Title from "./Title";
import ItemBox from "./ItemBox";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  function handleResetTodo() {
    setTodos(initialTodos);
  }

  return (
    <>
      <Title>
        {"state 内の配列の更新（ショッピングカートから商品を削除）"}
      </Title>
      <ItemBox>
        <AddTodo onAddTodo={handleAddTodo} onResetTodo={handleResetTodo} />
        <TaskList
          todos={todos}
          onChangeTodo={handleChangeTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </ItemBox>
    </>
  );
}
