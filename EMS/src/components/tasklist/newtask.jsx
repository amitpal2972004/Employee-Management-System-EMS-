import React, { useState } from "react";
import { updateTaskStatus } from "../../api";

const Newtask = ({ data, onStatusChange }) => {
  const [loading, setLoading] = useState(false);

  const handleAccept = async () => {
    setLoading(true);
    try {
      const updatedTask = await updateTaskStatus(data._id || data.id, "in-progress");
      onStatusChange(updatedTask);
    } catch (err) {
      console.error("Failed to accept task:", err);
      alert("Error updating task status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" ml-3 flex-shrink-0 w-[320px] p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 hover:scale-[1.03] transform transition duration-300 cursor-pointer">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="bg-blue-500/20 border border-blue-400 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
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

      {/* Accept Button */}
      <button
        onClick={handleAccept}
        disabled={loading}
        className={`w-full py-3 font-semibold rounded-xl text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-lg shadow-blue-900/40 transform transition duration-300 ${
          loading ? "opacity-60 cursor-not-allowed" : "hover:scale-105 active:scale-95"
        }`}
      >
        {loading ? "Accepting..." : "Accept Task"}
      </button>
    </div>
  );
};

export default Newtask;
