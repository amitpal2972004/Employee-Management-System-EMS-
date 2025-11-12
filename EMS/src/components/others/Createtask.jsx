import React, { useState, useEffect } from "react";
import { createTask } from "../../api";

const Createtask = ({ onTaskCreated }) => {
  const [Tasktitel, setTasktitel] = useState("");
  const [Description, setDescription] = useState("");
  const [assignTo, setassignTo] = useState([]); // ✅ initialize as array

  const [Taskdate, setDate] = useState("");
  const [category, setcategory] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch employee list from backend
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/tasks/employees");
        const data = await res.json();
        console.log("Fetched employees:", data); // Debug log
        setEmployees(data);
      } catch (err) {
        console.error("Error fetching employees:", err);
        // alert("Failed to load employees. Please refresh the page.");
      }
    };
    fetchEmployees();
  }, []);

  const sumbitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

   const newTask = {
  title: Tasktitel,
  description: Description,
  category,
  date: Taskdate,
  assignedTo: assignTo, 
  status: "new",
};

    try {
      await createTask(newTask);
      setTasktitel("");
      setDescription("");
      setcategory("");
      setassignTo("");
      setDate("");

      if (onTaskCreated) onTaskCreated();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1C1C1C] border-2 border-gray-800 p-6 mt-7 rounded-xl shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6">Create New Task</h2>

      <form onSubmit={sumbitHandler} className="flex flex-wrap gap-6">
        {/* Left Column */}
        <div className="flex-1 min-w-[300px] space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Task Title
            </label>
            <input
              value={Tasktitel}
              onChange={(e) => setTasktitel(e.target.value)}
              className="w-full text-sm py-3 px-4 rounded-lg outline-none placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 bg-gray-800/50 text-white"
              type="text"
              placeholder="Enter task title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Date
            </label>
            <input
              value={Taskdate}
              onChange={(e) => setDate(e.target.value)}
              className="w-full text-sm py-3 px-4 rounded-lg outline-none placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 bg-gray-800/50 text-white"
              type="date"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Assign to
            </label>
       <select
  value={assignTo} // a single value
  onChange={(e) => setassignTo(e.target.value)} // just one value
  className="w-full text-sm py-3 px-4 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white"
  required
>
  <option className="text-black" value="">Select employee</option> {/* optional placeholder */}
  {employees.map((emp) => (
    <option className="text-black" key={emp._id} value={emp._id}>
      {emp.email}
    </option>
  ))}
</select>


          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Category
            </label>
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className="w-full text-sm py-3 px-4 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white"
              type="text"
              placeholder="e.g. Stock Management, Billing"
              required
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 min-w-[300px] flex flex-col">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Description
          </label>
          <textarea
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
            className="flex-1 text-sm px-4 py-3 rounded-lg border-2 border-gray-700 bg-gray-800/50 text-white resize-none min-h-[280px]"
            placeholder="Enter task description"
            required
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