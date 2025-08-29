const API_URL = "https://todo-backend-seven-nu.vercel.app/v1";

export async function getAllTodos() {
  const response = await fetch(`${API_URL}/todos`, {
    method: "GET",
  });

  const data = await response.json();
  return data;
}

export async function createNewTodo(todoData) {
  const response = await fetch(`${API_URL}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  const data = await response.json();
  return data;
}

export async function deleteTodoAction(id) {
  const response = await fetch(`${API_URL}/todos/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
}

export async function updateTodo(todoData) {
  const response = await fetch(`${API_URL}/todos/${todoData.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoData),
  });

  const data = await response.json();
  return data;
}
