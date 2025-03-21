import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";


export const WelcomeLogo = () => {
    const {params} = useParams();
    console.log(params)
    const [nextPage, setNextPage] = useState(false);
    const navigate = useNavigate()

    const {loading} = useSelector((state)=> state.auth || null)
    const selectUser = useSelector((state)=> state.auth.user)
    console.log(selectUser)
    useEffect(()=> {
      const timerId = setTimeout(()=>setNextPage(true), 1000)
      return ()=>{
        clearTimeout(timerId)
      }
    },[])
    useEffect(()=>{
      if(nextPage && !selectUser && !loading){
        navigate('/welcome&agreement')
      }
      if(nextPage && selectUser){
        navigate('/all-chats')
      }
    },[navigate, nextPage, selectUser, loading])

    return !nextPage && (
      <div className="h-[100dvh] w-full flex flex-col justify-center items-center bg-base-100 gap-8">
        <span className="text-6xl shadow-md shadow-base-300 bg-base-300 p-4 rounded-2xl">💕</span>
      <h1 className="mt-4 text-xl text-base-content/50"> Loading....</h1>
    </div>)
    
};
