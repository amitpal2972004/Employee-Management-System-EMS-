import React, { useState } from 'react';
import { updateTaskStatus } from '../../api'; // Make sure your API supports status update

const Accepttask = ({ data, onStatusChange }) => {
  const [loading, setLoading] = useState(false);

  const handleStatusUpdate = async (status) => {
    setLoading(true);
    try {
      // Call API to update status
      const updatedTask = await updateTaskStatus(data._id || data.id, status);

      // Notify parent to update state
      if (onStatusChange) onStatusChange(updatedTask);
    } catch (err) {
      console.error(`Failed to mark task as ${status}:`, err);
      alert(`Error updating task status to ${status}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='h-full p-6 flex-shrink-0 w-[320px] bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-yellow-500 rounded-2xl shadow-xl shadow-yellow-900/30 hover:shadow-2xl hover:shadow-yellow-900/40 transition-all duration-300 hover:scale-[1.02]'>
      <div className='flex justify-between items-center mb-4'>
        <span className='bg-yellow-500/20 border border-yellow-500 text-yellow-400 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'>
          {data.category}
        </span>
             <span className='text-gray-400 text-xs font-medium'>
  {data.date.split('T')[0]}
</span>
      </div>

      <h2 className='text-2xl font-bold text-white mb-3 leading-tight'>{data.title}</h2>
      <p className='text-sm text-gray-400 leading-relaxed mb-5'>{data.description}</p>

      <div className='flex gap-3 mt-auto'>
        <button
          disabled={loading}
          onClick={() => handleStatusUpdate("completed")}
          className={`flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/50 text-sm ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Updating..." : "Complete"}
        </button>
        <button
          disabled={loading}
          onClick={() => handleStatusUpdate("failed")}
          className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2.5 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/50 text-sm ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {loading ? "Updating..." : "Failed"}
        </button>
      </div>
    </div>
  );
};

export default Accepttask;
