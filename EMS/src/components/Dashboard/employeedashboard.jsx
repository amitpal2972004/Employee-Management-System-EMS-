import React, { useEffect, useState } from "react";
import Header from "../others/Header";
import Tasklistnumber from "../others/Tasklistnumber";
import Tasklist from "../tasklist/Tasklist";
import { getTasksByUser } from "../../api";

const Employeedashboard = ({ changeUser, data }) => {

  
  const [taskStats, setTaskStats] = useState({
    newTask: 0,
    active: 0,
    completed: 0,
    failed: 0,
  });
  const [tasks, setTasks] = useState([]);

  // Helper to calculate task stats
  const calculateStats = (taskArray) => {
    return taskArray.reduce(
      (acc, task) => {
        switch (task.status) {
          case "new": acc.newTask++; break;
          case "in-progress": acc.active++; break;
          case "completed": acc.completed++; break;
          case "failed": acc.failed++; break;
        }
        return acc;
      },
      { newTask: 0, active: 0, completed: 0, failed: 0 }
    );
  };

  useEffect(() => {
    if (!data?.id) return;

    const fetchTasks = async () => {
      try {
        const taskData = await getTasksByUser(data.id);
        setTasks(taskData || []);
        setTaskStats(calculateStats(taskData || []));
      } catch (err) {
        console.error("Error fetching tasks:", err);
      }
    };

    fetchTasks();
  }, [data]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="p-6 lg:p-10 h-screen overflow-y-auto">
        <Header changeUser={changeUser} data={data} />
        <Tasklistnumber stats={taskStats} />

        <Tasklist
          tasks={tasks}
          onStatusChange={(updatedTask) => {
            const updatedTasks = tasks.map(task =>
              task._id === updatedTask._id ? { ...task, ...updatedTask } : task
            );
            setTasks(updatedTasks);
            setTaskStats(calculateStats(updatedTasks));
          }}
        />
      </div>
    </div>
  );
};

export default Employeedashboard;
