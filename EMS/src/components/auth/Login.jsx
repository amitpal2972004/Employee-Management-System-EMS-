import React, { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Submithandler=(e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex items-center h-screen w-screen justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black'>
            <div className='w-full max-w-md px-8'>
                {/* Logo/Title Section */}
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold text-emerald-500 mb-2'>Welcome Back</h1>
                    <p className='text-gray-400 text-sm'>Sign in to your account to continue</p>
                </div>

                {/* Login Card */}
                <div className='bg-[#1C1C1C] border-2 border-emerald-600 rounded-2xl p-8 shadow-2xl shadow-emerald-900/20'>
                    <form onSubmit={(e)=> Submithandler(e)} className='space-y-6'>
                        
                        {/* Email Input */}
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>
                                Email Address
                            </label>
                            <input 
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)} 
                                required 
                                className='w-full outline-none bg-gray-800/50 placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 px-4 py-3 rounded-lg text-white transition-all duration-300' 
                                type="email" 
                                placeholder='Enter your email' 
                            />
                        </div>

                        {/* Password Input */}
                        <div>
                            <label className='block text-sm font-medium text-gray-300 mb-2'>
                                Password
                            </label>
                            <input   
                                value={password}
                                onChange={(e)=> setPassword(e.target.value)}  
                                required 
                                className='w-full outline-none bg-gray-800/50 placeholder:text-gray-500 border-2 border-gray-700 focus:border-emerald-600 px-4 py-3 rounded-lg text-white transition-all duration-300' 
                                type="password" 
                                placeholder='Enter your password' 
                            />
                        </div>

                        {/* Submit Button */}
                        <button  
                            className='w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-emerald-900/50'>
                            Sign In
                        </button>

                        {/* Demo Credentials Info */}
                    
                    </form>
                </div>

                {/* Footer */}
                
            </div>
        </div>
    )
}

export default Login