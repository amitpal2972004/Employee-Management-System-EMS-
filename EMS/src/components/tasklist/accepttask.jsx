import React, { useState } from 'react';
import { updateTaskStatus } from '../../api'; 

const Accepttask = ({ data, onStatusChange }) => {
  const [loading, setLoading] = useState(false);

  const handleStatusUpdate = async (status) => {
    setLoading(true);
    try {
      const updatedTask = await updateTaskStatus(data._id || data.id, status);
      if (onStatusChange) onStatusChange(updatedTask);
    } catch (err) {
      console.error(`Failed to mark task as ${status}:`, err);
      alert(`Error updating task status to ${status}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-shrink-0 w-[320px] p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-yellow-900 via-yellow-800 to-gray-900 hover:scale-[1.03] transform transition duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="bg-yellow-500/20 border border-yellow-400 text-yellow-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
          {data.category}
        </span>
        <span className="text-gray-400 text-xs font-medium">
          {data.date.split('T')[0]}
        </span>
      </div>

      {/* Title & Description */}
      <h2 className="text-2xl font-bold text-white mb-2 truncate">{data.title}</h2>
      <p className="text-sm text-gray-300 mb-5 line-clamp-3">
        {data.description}
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        <button
          disabled={loading}
          onClick={() => handleStatusUpdate("completed")}
          className={`flex-1 py-3 text-sm font-semibold rounded-xl text-white shadow-lg shadow-emerald-900/40 transition transform duration-300 hover:scale-105 active:scale-95 ${
            loading ? "bg-emerald-600 opacity-50 cursor-not-allowed" : "bg-emerald-600 hover:bg-emerald-700"
          }`}
        >
          {loading ? "Updating..." : "Complete"}
        </button>
        <button
          disabled={loading}
          onClick={() => handleStatusUpdate("failed")}
          className={`flex-1 py-3 text-sm font-semibold rounded-xl text-white shadow-lg shadow-red-900/40 transition transform duration-300 hover:scale-105 active:scale-95 ${
            loading ? "bg-red-600 opacity-50 cursor-not-allowed" : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {loading ? "Updating..." : "Failed"}
        </button>
      </div>
    </div>
  );
};

export default Accepttask;
