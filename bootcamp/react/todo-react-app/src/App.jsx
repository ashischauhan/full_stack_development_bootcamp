import { useEffect } from "react";
import { getAllTodos } from "./actions/todo";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      const allTodos = await getAllTodos();
      setTodos(allTodos.data);
    })();
  }),
    [];

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.title}</div>
        ))}
      </ul>
    </div>
  );
}
