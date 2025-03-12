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

    return !nextPage && (
      <div className="h-[100dvh] w-full flex flex-col justify-center items-center bg-base-100 gap-8">
        <span onClick={handleNextPage} className="text-6xl shadow-md shadow-base-300 bg-base-300 p-4 rounded-2xl">💕</span>
      <h1 className="mt-4 text-xl text-base-content/50"> Loading....</h1>
    </div>)
    || (<WelcomePage />)
    
};
