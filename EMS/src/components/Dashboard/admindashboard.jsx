import React, { useState, useEffect } from "react";
import Header from "../others/Header";
import Createtask from "../others/Createtask";
import Alltask from "../others/Alltask";
import { getEmployeesWithTasks } from "../../api";

const AdminDashboard = (props) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch employees and tasks
  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await getEmployeesWithTasks();
      setEmployees(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };
const [refreshFlag, setRefreshFlag] = useState(false);

const handleTaskCreated = () => {
  setRefreshFlag(prev => !prev); // toggle to trigger re-fetch
};
  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="h-screen w-full p-6 lg:p-10 overflow-y-auto">
        <Header changeUser={props.changeUser} />
      <Createtask onTaskCreated={handleTaskCreated} />
<Alltask refreshFlag={refreshFlag} />
      </div>
    </div>
  );
};

export default AdminDashboard;
