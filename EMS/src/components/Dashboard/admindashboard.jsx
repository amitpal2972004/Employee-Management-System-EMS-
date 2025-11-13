import React, { useState, useEffect } from "react";
import Header from "../others/Header";
import Createtask from "../others/Createtask";
import Alltask from "../others/Alltask";
import AddEmployee from "../others/AddEmployee";
import { getEmployeesWithTasks } from "../../api";

const AdminDashboard = ({ changeUser }) => {
  const [employees, setEmployees] = useState([]);
  const [refreshFlag, setRefreshFlag] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);

  // Fetch all employees from backend
  const fetchEmployees = async () => {
    try {
     const data = await getEmployeesWithTasks();
      setEmployees(data);
    } catch (err) {
      console.error("Error fetching employees:", err);
    }
     finally {
      // setLoading(false);
    }
  };

const handleEmployeeAdded = () => {
  fetchEmployees();       // update state with latest employees
  setShowAddForm(false);  // close the form
  setRefreshFlag(prev => !prev); // refresh Alltask
};

  // Refresh tasks
  const handleTaskCreated = () => setRefreshFlag(prev => !prev);

  // Initial fetch
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="h-screen w-full p-6 lg:p-10 overflow-y-auto">
        <Header changeUser={changeUser} />

        {/* Button to show AddEmployee form */}
        {!showAddForm && (
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-4"
          >
            Add Employee
          </button>
        )}

        {/* Show AddEmployee form */}
        {showAddForm && (
          <AddEmployee
            onEmployeeAdded={handleEmployeeAdded}
            onCancel={() => setShowAddForm(false)}
          />
        )}

        {/* Pass employees to CreateTask for dropdown */}
        {/* <Createtask employees={employees} onTaskCreated={handleTaskCreated} /> */}
        <Createtask employees={employees} onTaskCreated={handleTaskCreated} refreshEmployees={refreshFlag} />
        


        {/* Pass employees to Alltask for display */}
        <Alltask refreshFlag={refreshFlag} employees={employees} />
      </div>
    </div>
  );
};

export default AdminDashboard;
