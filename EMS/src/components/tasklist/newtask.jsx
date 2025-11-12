import React, { useState } from "react";
import { updateTaskStatus } from "../../api";

const Newtask = ({ data, onStatusChange }) => {
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    try {
      // Call API to update status to "in-progress"
      const updatedTask = await updateTaskStatus(data._id || data.id, "in-progress");

      // Notify parent to update state
      onStatusChange(updatedTask);
    } catch (err) {
      console.error("Failed to accept task:", err);
      alert("Error updating task status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full p-6 flex-shrink-0 w-[320px] bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-blue-500 rounded-2xl shadow-xl shadow-blue-900/30 hover:shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 hover:scale-[1.02]">
      <div className="flex justify-between items-center mb-4">
        <span className="bg-blue-500/20 border border-blue-500 text-blue-400 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide">
          {data.category}
        </span>
        <span className="text-gray-400 text-xs font-medium"><span>{task.date.split('T')[0]}</span>
</span>
      </div>

      <h2 className="text-2xl font-bold text-white mb-3 leading-tight">{data.title}</h2>
      <p className="text-sm text-gray-400 leading-relaxed mb-5">{data.description}</p>

      <div className="mt-auto">
        <button
          onClick={handleAccept}
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-900/50 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Accepting..." : "Accept Task"}
        </button>
      </div>
    </div>
  );
};

export default Newtask;
