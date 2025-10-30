import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Createtask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [Tasktitel, setTasktitel] = useState('')
    const [Description, setDescription] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [Taskdate, setDate] = useState('')
    const [category, setcategory] = useState('')

    const sumbitHandler = (e) => {
        e.preventDefault()
        
        const newTask = {
            title: Tasktitel,
            description: Description,
            category: category,
            date: Taskdate,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        }
        
        const data = [...userData]
        
        data.forEach(function(elem){
            if(assignTo === elem.firstName){
                elem.tasks.push(newTask)
                elem.taskNumber.newTask = elem.taskNumber.newTask + 1
                elem.taskNumber.total = elem.taskNumber.total + 1
            }
        })
        
        setUserData(data)
        localStorage.setItem('employees', JSON.stringify(data))
        
        setDate('')
        setDescription('')
        setTasktitel('')
        setcategory('')
        setassignTo('')
    }

    return (
        <div className="bg-[#1C1C1C] border-2 border-gray-800 p-6 mt-7 rounded-xl shadow-2xl">
            <h2 className='text-2xl font-bold text-white mb-6'>Create New Task</h2>
            
            <form onSubmit={(e) => sumbitHandler(e)} className="flex flex-wrap gap-6">
                {/* Left Column */}
                <div className="flex-1 min-w-[300px] space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Task Title
                        </label>
                        <input 
                            value={Tasktitel} 
                            onChange={(e) => setTasktitel(e.target.value)}
                            className="w-full text-sm py-3 px-4 rounded-lg outline-none placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 bg-gray-800/50 text-white transition-all duration-300" 
                            type="text" 
                            placeholder="Enter task title" 
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Date
                        </label>
                        <input 
                            value={Taskdate} 
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full text-sm py-3 px-4 rounded-lg outline-none placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 bg-gray-800/50 text-white transition-all duration-300" 
                            type="date"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Assign to
                        </label>
                        <input 
                            value={assignTo} 
                            onChange={(e) => setassignTo(e.target.value)}
                            className="w-full text-sm py-3 px-4 rounded-lg outline-none placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 bg-gray-800/50 text-white transition-all duration-300" 
                            type="text" 
                            placeholder="Enter employee name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Category
                        </label>
                        <input 
                            value={category} 
                            onChange={(e) => setcategory(e.target.value)}
                            className="w-full text-sm py-3 px-4 rounded-lg outline-none placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 bg-gray-800/50 text-white transition-all duration-300" 
                            type="text" 
                            placeholder="e.g. Stock Management, Billing"
                            required
                        />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 min-w-[300px] flex flex-col">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                        Description
                    </label>
                    <textarea 
                        value={Description} 
                        onChange={(e) => setDescription(e.target.value)}
                        className="flex-1 text-sm px-4 py-3 rounded-lg outline-none placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 bg-gray-800/50 text-white transition-all duration-300 resize-none min-h-[280px]" 
                        placeholder="Enter task description"
                        required
                    />
                    
                    <button 
                        type="submit"
                        className="mt-4 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/50 text-lg"
                    >
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Createtask