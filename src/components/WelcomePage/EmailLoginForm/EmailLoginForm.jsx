import React from 'react'
import { Button } from '../Continue-agreement/Button'
import { NavLink } from 'react-router-dom'

export const EmailLoginForm = ({setLoginPortal}) => {
    const handleCancel = () => {
        setLoginPortal(false)
    }
    const handleLogin= ()=>{
        setLoginPortal(false)
    }
  return (
    <div className="h-1/2 w-screen bg-base-300 z-50 flex justify-center items-center transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2">
       <div className="bg-base-200 w-4/5 h-4/5 flex flex-col justify-center items-center rounded-lg">
        <form className='flex flex-col gap-4 w-full h-1/2 items-center'>
            <input type="email" name='email' placeholder="Email" className="w-4/5 h-1/3 bg-base-100 text-black text-xl rounded-lg p-4 border-1 border-blue-600 focus:text-base-content focus:border-base-content"/>
            <input type="password" name='password' placeholder="Password"  className="w-4/5 h-1/3 bg-base-100 text-black text-xl rounded-lg p-4 border-1 border-blue-600 focus:text-base-content focus:border-base-content"/>  
        </form>

        <div className='flex justify-between w-full'>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleCancel}>Cancel</Button>
        <NavLink to='/all-chats'> <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleLogin}>Login</Button></NavLink>
        </div>
       </div>
    </div>
  )
}
