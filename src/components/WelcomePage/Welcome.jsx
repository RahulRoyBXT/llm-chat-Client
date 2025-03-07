import React, { useEffect, useState } from "react";
import { WelcomePage } from "./Continue-agreement/WelcomePage";
import { useParams } from "react-router-dom";


export const Welcome = () => {
    const {params} = useParams();
    console.log(params)
    const [nextPage, setNextPage] = useState(false);


    const handleNextPage = () => {
        setNextPage(true);
    }

    return !nextPage && ( <div className="h-screen w-full flex flex-col justify-center items-center bg-primary gap-8">
      <span onClick={handleNextPage} className="text-gradient flex flex-col justify-center items-center text-6xl font-black font-sans">
        💕
      </span>
      <h1 className="mt-4 text-lg "> Loading....</h1>
    </div>)
    || (<WelcomePage />)
    
};
