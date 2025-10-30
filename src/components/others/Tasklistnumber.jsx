import React from 'react'

const Tasklistnumber = ({data}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>
      {/* New Task Card */}
      <div className='bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl py-6 px-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-blue-400/20'>
        <div className='flex items-center justify-between mb-2'>
          <div className='bg-white/20 rounded-full p-3'>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M12 4v16m8-8H4' />
            </svg>
          </div>
          <span className='text-white/80 text-sm font-medium'>New</span>
        </div>
        <h2 className='text-4xl font-bold text-white mb-1'>{data.taskNumber.newTask}</h2>
        <h3 className='text-sm font-medium text-white/90'>New Tasks</h3>
      </div>

      {/* Active Task Card */}
      <div className='bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl py-6 px-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-yellow-400/20'>
        <div className='flex items-center justify-between mb-2'>
          <div className='bg-white/20 rounded-full p-3'>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M13 10V3L4 14h7v7l9-11h-7z' />
            </svg>
          </div>
          <span className='text-white/80 text-sm font-medium'>Active</span>
        </div>
        <h2 className='text-4xl font-bold text-white mb-1'>{data.taskNumber.active}</h2>
        <h3 className='text-sm font-medium text-white/90'>Active Tasks</h3>
      </div>

      {/* Completed Task Card */}
      <div className='bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl py-6 px-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-green-400/20'>
        <div className='flex items-center justify-between mb-2'>
          <div className='bg-white/20 rounded-full p-3'>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
          <span className='text-white/80 text-sm font-medium'>Completed</span>
        </div>
        <h2 className='text-4xl font-bold text-white mb-1'>{data.taskNumber.completed}</h2>
        <h3 className='text-sm font-medium text-white/90'>Completed Tasks</h3>
      </div>

      {/* Failed Task Card */}
      <div className='bg-gradient-to-br from-red-500 to-red-600 rounded-xl py-6 px-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-red-400/20'>
        <div className='flex items-center justify-between mb-2'>
          <div className='bg-white/20 rounded-full p-3'>
            <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
          <span className='text-white/80 text-sm font-medium'>Failed</span>
        </div>
        <h2 className='text-4xl font-bold text-white mb-1'>{data.taskNumber.failed}</h2>
        <h3 className='text-sm font-medium text-white/90'>Failed Tasks</h3>
      </div>
    </div>
  )
}

export default Tasklistnumber