import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltask = () => {
    const [userData, setUserData] = useContext(AuthContext)
    
    return (
        <div className='bg-[#1C1C1C] border-2 border-gray-800 p-6 mt-5 rounded-xl shadow-2xl'>
            {/* Header Title */}
            <h2 className='text-2xl font-bold text-white mb-4'>Employee Task Overview</h2>

            {/* Table Header */}
            <div className='bg-gradient-to-r from-emerald-600 to-emerald-700 mb-3 py-3 px-4 flex justify-between rounded-lg shadow-lg'>
                <h2 className='text-sm font-semibold w-1/5 text-white'>Employee Name</h2>
                <h3 className='text-sm font-semibold w-1/5 text-white text-center'>New Tasks</h3>
                <h3 className='text-sm font-semibold w-1/5 text-white text-center'>Active Tasks</h3>
                <h5 className='text-sm font-semibold w-1/5 text-white text-center'>Completed</h5>
                <h5 className='text-sm font-semibold w-1/5 text-white text-center'>Failed</h5>
            </div>

            {/* Table Body */}
            <div className='max-h-96  scrollbar-thin scrollbar-thumb-emerald-600 scrollbar-track-gray-800'>
                {userData && userData.map((elem, idx) => {
                    return (
                        <div 
                            key={idx} 
                            className='bg-gray-800/50 hover:bg-gray-800 border border-gray-700 mb-2 py-3 px-4 flex justify-between rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-lg'
                        >
                            <h2 className='text-sm font-medium w-1/5 text-white flex items-center'>
                                <span className='w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-xs mr-3'>
                                    {elem.firstName.charAt(0)}
                                </span>
                                {elem.firstName}
                            </h2>
                            <h3 className='text-sm font-medium w-1/5 text-center flex items-center justify-center'>
                                <span className='bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                                    {elem.taskNumber.newTask}
                                </span>
                            </h3>
                            <h5 className='text-sm font-medium w-1/5 text-center flex items-center justify-center'>
                                <span className='bg-yellow-500 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold'>
                                    {elem.taskNumber.active}
                                </span>
                            </h5>
                            <h5 className='text-sm font-medium w-1/5 text-center flex items-center justify-center'>
                                <span className='bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                                    {elem.taskNumber.completed}
                                </span>
                            </h5>
                            <h5 className='text-sm font-medium w-1/5 text-center flex items-center justify-center'>
                                <span className='bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold'>
                                    {elem.taskNumber.failed}
                                </span>
                            </h5>
                        </div>
                    )
                })}
            </div>

            {/* Empty State */}
            {userData && userData.length === 0 && (
                <div className='text-center py-12'>
                    <p className='text-gray-500'>No employees found</p>
                </div>
            )}
        </div>
    )
}

export default Alltask