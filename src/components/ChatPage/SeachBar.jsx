import React, { useEffect, useRef, useState } from 'react'
import { RiArrowGoBackFill } from "react-icons/ri";;

let Data = [];

export const SeachBar = ({searchField, setSearchField, setSearchBarStatus}) => {


    const goBack = ()=>{
      setSearchBarStatus(false)
    }
  return (
    <div className='min-h-30 w-full p-2 fixed top-0 left-0'>
          <div className='h-18 bg-base-300/80 w-full rounded-xl flex flex-row items-center justify-around shadow-base-100 shadow-lg'>
            <div className='h-9/10 flex w-4/5 min-w-fit p-2 relative'>
            <input value={searchField} onChange={(e)=>setSearchField(e.target.value)} placeholder='Search' className='bg-base-100/40 text-base-content rounded-xl w-full p-2'/>
            </div>
            <div className='h-full flex items-center min-w-fit' onClick={goBack}><RiArrowGoBackFill className='text-4xl bg-base-100 rounded-xl text-base-content m-2 border-2 border-zinc-500/20'/></div>
          </div>
        </div>
  )
}
