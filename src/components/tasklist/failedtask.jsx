import React from 'react'

const failedtask = () => {
  return (
      <div className='h-full p-6 flex-shrink-0 w-[320px] bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-red-500 rounded-2xl shadow-xl shadow-red-900/30 hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-300 hover:scale-[1.02]'>
      <div className='flex justify-between items-center mb-4'>
        <span className='bg-red-500/20 border border-red-500 text-red-400 px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wide'>
          {data.category}
        </span>
        <span className='text-gray-400 text-xs font-medium'>{data.date}</span>
      </div>
      
      <h2 className='text-2xl font-bold text-white mb-3 leading-tight'>{data.title}</h2>
      <p className='text-sm text-gray-400 leading-relaxed mb-5'>{data.description}</p>
      
      <div className='mt-auto'>
        <button className='w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg shadow-lg shadow-red-900/50 cursor-default opacity-90'>
          ✗ Failed
        </button>
      </div>
    </div>
  )
}

export default failedtask
