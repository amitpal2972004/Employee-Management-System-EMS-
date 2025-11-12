import React from 'react';

const Tasklistnumber = ({ stats }) => {
  if (!stats) return null;

  const cards = [
    { color: 'blue', label: 'New', value: stats.newTask },
    { color: 'yellow', label: 'Active', value: stats.active },
    { color: 'green', label: 'Completed', value: stats.completed },
    { color: 'red', label: 'Failed', value: stats.failed },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
      {cards.map((card) => (
        <Card key={card.label} color={card.color} label={card.label} value={card.value} />
      ))}
    </div>
  );
};

const colorMap = {
  blue: 'from-blue-500 to-blue-600 shadow-blue-500/40',
  yellow: 'from-yellow-500 to-yellow-600 shadow-yellow-500/40',
  green: 'from-emerald-500 to-emerald-600 shadow-emerald-500/40',
  red: 'from-red-500 to-red-600 shadow-red-500/40',
};

const Card = ({ color, label, value }) => {
  const gradientClass = colorMap[color] || colorMap.blue;

  return (
    <div
      className={`bg-gradient-to-br ${gradientClass} rounded-xl py-6 px-6 shadow-lg transform transition duration-300 hover:scale-105`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="bg-white/20 rounded-full p-3">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <span className="text-white/80 text-sm font-medium">{label}</span>
      </div>
      <h2 className="text-4xl font-bold text-white mb-1">{value}</h2>
      <h3 className="text-sm font-medium text-white/90">{label} Tasks</h3>
    </div>
  );
};

export default Tasklistnumber;
