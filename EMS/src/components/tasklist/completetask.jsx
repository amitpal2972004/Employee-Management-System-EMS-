import React from 'react';

const Completetask = ({ data }) => {
  return (
    <div className="flex-shrink-0 w-[320px] p-6 rounded-2xl shadow-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-gray-900 hover:scale-[1.03] transform transition duration-300">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span className="bg-emerald-500/20 border border-emerald-400 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">
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

      {/* Completed Button */}
      <button className="w-full py-3 font-semibold rounded-xl text-white bg-emerald-600 shadow-lg shadow-emerald-900/40 cursor-not-allowed opacity-80">
        Completed
      </button>
    </div>
  );
};

export default Completetask;
