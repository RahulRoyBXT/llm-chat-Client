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
    <div className="h-1/2 w-screen bg-primary/60 fixed top-0 left-0 z-50 flex justify-center items-center transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2">
       <div className="bg-primary/80 w-4/5 h-4/5 flex flex-col justify-center items-center rounded-lg">
        <form className='flex flex-col gap-4 w-full h-1/2'>
            <input type="email" name='email' placeholder="Email" className="w-4/5 h-1/3 bg-primary/80 text-dark text-xl rounded-lg p-4 border-1"/>
            <input type="password" name='password' placeholder="Password" className="w-4/5 h-1/3 primary/80 text-dark text-xl rounded-lg p-4 border-1"/>  
        </form>

        <div className='flex justify-between w-full'>
        <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleCancel}>Cancel</Button>
        <NavLink to='/all-chats'> <Button className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer" onClick={handleLogin}>Login</Button></NavLink>
        </div>
       </div>
    </div>
  )
}
