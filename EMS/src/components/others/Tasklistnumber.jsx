import React from 'react'

const Tasklistnumber = ({ stats }) => {
  if (!stats) return null;
  // console.log(stats)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
      <Card color="blue" label="New" value={stats.newTask} />
      
      <Card color="yellow" label="Active" value={stats.active} />
      <Card color="green" label="Completed" value={stats.completed} />
      <Card color="red" label="Failed" value={stats.failed} />
    </div>
  );
};

const Card = ({ color, label, value }) => (
  <div
    className={`bg-gradient-to-br from-${color}-500 to-${color}-600 rounded-xl py-6 px-6 shadow-lg hover:scale-105 transition`}
  >
    <div className="flex items-center justify-between mb-2">
      <div className="bg-white/20 rounded-full p-3">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <span className="text-white/80 text-sm font-medium">{label}</span>
    </div>
    <h2 className="text-4xl font-bold text-white mb-1">{value}</h2>
    <h3 className="text-sm font-medium text-white/90">{label} Tasks</h3>
  </div>
);

export default Tasklistnumber