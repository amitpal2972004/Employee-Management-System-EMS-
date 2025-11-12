import React from 'react'

const Header = (props) => {
  const { data, changeUser } = props

 const displayName =
  data && (data.firstName || data.name)
    ? data.firstName || data.name
    : "Admin";


  const logOutuser = () => {
    localStorage.setItem('loggedInUser', '')
    changeUser('')
    
  }

  return (
    <div className='flex items-end justify-between mb-8 pb-6 border-b border-gray-800'>
      <div>
        <h1 className='text-lg font-normal text-gray-400'>
          Welcome back,
        </h1>
        <h2 className='text-4xl font-bold text-white mt-1 flex items-center gap-2'>
  {displayName}
  <span className='text-3xl'>👋</span>
</h2>

      </div>
      <button 
        onClick={logOutuser} 
        className='bg-red-600 hover:bg-red-700 text-base font-semibold text-white px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-red-900/50'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
