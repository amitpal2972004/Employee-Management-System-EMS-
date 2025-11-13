import React, { useState, useEffect } from "react";
import { createTask } from "../../api";
const BACKEND_URL = import.meta.env.VITE_API_URL;

const Createtask = ({ onTaskCreated, refreshEmployees }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignTo, setAssignTo] = useState(""); //
  const [taskDate, setTaskDate] = useState("");
  const [category, setCategory] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch employee list from backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch(`${BACKEND_URL}/api/tasks/employees`);
        if (!res.ok) throw new Error("Failed to fetch employees");
        const data = await res.json();
        setEmployees(data);
      } catch (err) {
        console.error("Error fetching employees:", err);
        alert("Failed to load employees. Please refresh the page.");
      }
    };
    fetchEmployees();
  }, [refreshEmployees]);

const submitHandler = async (e) => {
  e.preventDefault();
  setLoading(true);

  const newTask = {
    title: taskTitle,
    description,
    category,
    date: taskDate,
    assignedTo: assignTo, 
    status: "new",
  };

  try {
    await createTask(newTask);

    // Reset form
    setTaskTitle("");
    setDescription("");
    setCategory("");
    setAssignTo(""); // <-- reset assignTo
    setTaskDate("");

    if (onTaskCreated) onTaskCreated();
  } catch (err) {
    console.error("Error creating task:", err);
    alert("Failed to create task");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="bg-[#1C1C1C] border-2 border-gray-800 p-6 mt-7 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6">Create New Task</h2>

      <form onSubmit={submitHandler} className="flex flex-wrap gap-6">
        {/* Left Column */}
        <div className="flex-1 min-w-[300px] space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Task Title
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full text-sm py-3 px-4 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Date
            </label>
            <input
              type="date"
              required
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="w-full text-sm py-3 px-4 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Assign to
            </label>
            <select
              required
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="w-full text-sm py-3 px-4 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white"
            >
              <option value="">Select employee</option>
              {employees.map((emp) => (
                <option key={emp._id} value={emp._id}>
                  {emp.firstName ? `${emp.firstName} ${emp.lastName}` : emp.email}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <input
              type="text"
              placeholder="e.g. Stock Management, Billing"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full text-sm py-3 px-4 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-[300px] flex flex-col">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            placeholder="Enter task description"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 text-sm px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white resize-none min-h-[280px]"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/50 text-lg"
          >
            {loading ? "Creating..." : "Create Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Createtask;
