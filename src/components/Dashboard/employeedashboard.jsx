import React from 'react'
import Header from '../others/Header'
import Tasklistnumber from '../others/Tasklistnumber'
import Tasklist from '../tasklist/Tasklist'

const employeedashboard = (props) => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
      <div className='p-6 lg:p-10 h-screen overflow-y-auto'>
        <Header changeUser={props.changeUser} data={props.data}/>
        <Tasklistnumber data={props.data} />
        <Tasklist data={props.data} />
      </div>
    </div>
  )
}

export default employeedashboard
