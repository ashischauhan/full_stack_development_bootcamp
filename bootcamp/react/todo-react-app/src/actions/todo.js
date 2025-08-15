const API_URL = "https://todo-backend-seven-nu.vercel.app/v1";

export async function getAllTodos() {
  const response = await fetch(`${API_URL}/todos`, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data = await response.json();
  return data;
}
