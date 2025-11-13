import React, { useEffect, useState } from "react";
import { getEmployeesWithTasks } from "../../api";

const Alltask = ({  refreshFlag }) => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, [refreshFlag]);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const data = await getEmployeesWithTasks();
      setEmployees(data || []);
    } catch (err) {
      console.error("Error fetching employees:", err);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return <div className="text-white py-12 text-center text-lg">Loading...</div>;

  return (
    <div className="bg-[#1C1C1C] border border-gray-700 p-6 mt-5 rounded-2xl shadow-2xl">
      <h2 className="text-3xl font-bold text-white mb-6">Employee Task Overview</h2>

      {/* Header Row */}
      <div className="grid grid-cols-5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 px-4 rounded-xl shadow-md text-sm font-semibold">
        <span>Employee</span>
        <span className="text-center">New</span>
        <span className="text-center">Active</span>
        <span className="text-center">Completed</span>
        <span className="text-center">Failed</span>
      </div>

      {/* Employee List */}
      <div id="alltasknoscroll" className="max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-emerald-600 scrollbar-track-gray-800 mt-3">
        {employees.length > 0 ? (
          employees.map((emp, idx) => {
            const counts = emp.tasks?.reduce(
              (acc, t) => {
                acc[t.status] = (acc[t.status] || 0) + 1;
                return acc;
              },
              { new: 0, "in-progress": 0, completed: 0, failed: 0 }
            ) || { new: 0, "in-progress": 0, completed: 0, failed: 0 };

            return (
              <div
                key={idx}
                className="grid grid-cols-5 items-center bg-gray-800/40 hover:bg-gray-800/70 border border-gray-700 mb-2 py-3 px-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                {/* Employee Info */}
                <div className="flex items-center space-x-3 text-white text-sm font-medium">
                  
                  <div>
                    <div>{emp.name}</div>
                    <div className="text-gray-400 text-xs">{emp.email}</div>
                  </div>
                </div>

                {/* Task Counts */}
                <div className="text-center">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {counts.new}
                  </span>
                </div>
                <div className="text-center">
                  <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {counts["in-progress"]}
                  </span>
                </div>
                <div className="text-center">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {counts.completed}
                  </span>
                </div>
                <div className="text-center">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {counts.failed}
                  </span>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-12 text-gray-400 text-lg">
            No employees found
          </div>
        )}
      </div>
    </div>
  );
};

export default Alltask;
