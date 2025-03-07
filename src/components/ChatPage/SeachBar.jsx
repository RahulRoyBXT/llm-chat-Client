import React, { useEffect, useRef, useState } from 'react'
import { IoReturnDownBack } from "react-icons/io5";

let Data = [];

export const SeachBar = ({searchField, setSearchField, setSearchBarStatus}) => {
    const [clear, setClear] = useState(true)

    const clearRef = useRef()

    const ClearInputAndDeleteIt= ()=>{
      setSearchField('')

    }
    const goBack = ()=>{
      setSearchBarStatus(false)
    }
    console.log(clear)
  return (
    <div className='min-h-30 w-full p-2 fixed top-0 left-0'>
          <div className='h-18 bg-base-300/80 w-full rounded-xl flex flex-row items-center justify-around shadow-base-100 shadow-lg'>
            <div className='h-9/10 flex w-4/5 min-w-fit p-2 relative'>
            <input ref={clearRef} value={searchField} onChange={(e)=>setSearchField(e.target.value)} className='bg-base-100/40 text-base-content rounded-xl w-full p-2'/>
            {clear && <span onClick={ClearInputAndDeleteIt} className='absolute text-2xl text-base-content shadow-xl shadow-white top-[50%] right-5 transform translate-x-[-50%] translate-y-[-50%] bg-base-100'><i>X</i></span>}
            </div>
            <div className='h-full flex items-center min-w-fit' onClick={goBack}><IoReturnDownBack className='text-4xl bg-base-100 rounded-xl text-base-content m-2 border-2 border-zinc-500/20'/></div>
          </div>
        </div>
  )
}
