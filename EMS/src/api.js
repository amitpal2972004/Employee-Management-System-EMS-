//api.js
// const API_URL = "https://employee-management-system-ems-backend.onrender.com/api";
const API_URL = `${import.meta.env.VITE_API_URL}/api`;

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  return response.json();
};

export const createTask = async (taskData) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  return response.json();
};

export const getEmployeeTasks = async (userId) => {
  const response = await fetch(`${API_URL}/tasks/${userId}`);
  return response.json();
};

export const updateTaskStatus = async (taskId, status) => {
  const response = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const getTasksByUser = async (userId) => {
  const token = localStorage.getItem("token"); // optional if using auth
  const res = await fetch(`${API_URL}/tasks/${userId}`, {
    headers: { Authorization: `Bearer ${token}` }, 
  });
  return await res.json();
};


export const getAllTasks = async () => {
   const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return await res.json();
};

// Get all employees with their tasks (for admin dashboard)
export const getEmployeesWithTasks = async () => {
  const token = localStorage.getItem("token"); // if using auth
  const res = await fetch(`${API_URL}/tasks/employees-with-tasks`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch employees with tasks");
  return await res.json();
};
