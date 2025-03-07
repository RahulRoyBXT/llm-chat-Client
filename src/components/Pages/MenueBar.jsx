import React from 'react'
import { ImCross } from "react-icons/im";

export const MenueBar = ({setNavOpenStatus}) => {

  return (
    <div className='h-[50%] w-[70%] bg-zinc-200 top-5 left-5 z-10 fixed rounded-xl p-4 border-2 border-blue-400'>
    <div className='bg-zinc-300 min-h-full w-full flex flex-col'>
        <div><ImCross  onClick={(e)=> {e.stopPropagation(); setNavOpenStatus(false)}}/></div>
        <div>
            <div>
            <p>Image</p>
            <p>Name</p>
            </div>
        </div>
        <div>
            <p>Profile</p>
            <p>Logout</p>
            <p>Theme</p>
            <p> Stared messages</p>
        </div>
        
    </div>

    </div>
  )
}
