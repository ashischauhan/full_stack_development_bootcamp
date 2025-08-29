import { useEffect } from "react";
import { getAllTodos } from "./actions/todo";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createNewTodo } from "./actions/todo";
import { deleteTodoAction } from "./actions/todo";
import { updateTodo } from "./actions/todo";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
  })
  .required();

export default function App() {
  const [todos, setTodos] = useState([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await createNewTodo(data);
    await populateTodos();
    setValue("title", "");
  };

  async function populateTodos() {
    const allTodos = await getAllTodos();
    setTodos(allTodos.data);
  }

  useEffect(() => {
    (async () => {
      await populateTodos();
    })();
  }, []);

  async function deleteTodo(id) {
    const result = confirm("Are you sure you want to delete this todo?");
    if (result) {
      await deleteTodoAction(id);
      await populateTodos();
    }
  }

  async function toggleTodo(event, id) {
    await updateTodo({
      id,
      isCompleted: event.target.checked,
    });
    await populateTodos();
  }

  function editTitle(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEditing: true,
          };
        }
        return todo;
      })
    );
  }

  async function handleTitleChange(id, newTitle) {
    await updateTodo({
      id,
      title: newTitle,
    });
    await populateTodos();
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Add a new task..."
          {...register("title")}
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title.message}</p>}
      </form>
      <div>
        {todos.map((todo) => (
          <div
            key={todo.id}
            style={{
              textDecoration: todo.isCompleted ? "line-through" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={(event) => toggleTodo(event, todo.id)}
            />
            {todo.isEditing ? (
              <input
                type="text"
                defaultValue={todo.title}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleTitleChange(todo.id, event.target.value);
                  }
                }}
              />
            ) : (
              <span onClick={() => editTitle(todo.id)}>{todo.title}</span>
            )}
            {todo.isCompleted ? "✅" : ""}{" "}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
