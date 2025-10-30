import React from 'react'
import Accepttask from './accepttask'
import Newtask from './newtask'
import Completetask from './completetask'
import Failedtask from './failedtask'

const Tasklist = ({data}) => {
  return (
    <div  id='tasklist' className=' flex tems-center justify-start gap-5 h-[55%]  overflow-x-auto flex-nowrap w-full py-5 mt-10 '>
    
 {data.tasks.map((elem, idx)=>{
  if(elem.active){
    return <Accepttask Key={idx} data={elem} />
  }
  if(elem.newTask){
    return <Newtask   Key={idx} data={elem}/>
  }
  if(elem.completed){
    return <Completetask  Key={idx} data={elem} />
  }
 
  if(elem.failed){
    return <Failedtask Key={idx} data={elem} />
  }
 

 })}


        {/* <Accepttask />
    <Newtask />
    <Completetask />
    <Failedtask />
      
      */}
    
      
    </div>
  )
}

export default Tasklist
