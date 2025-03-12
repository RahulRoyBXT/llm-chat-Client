import React, { useState } from "react";
import { Button } from "./Continue-agreement/Button";
import { MdEmail } from "react-icons/md";
import { FaGoogle } from "react-icons/fa";
import { createPortal } from "react-dom";
import { EmailLoginForm } from "./EmailLoginForm/EmailLoginForm";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const [loginPortal, setLoginPortal] = useState(false);
  const Emailform = () => {
    console.log("okay");
    setLoginPortal(true);
  };
  return (
    <div className="h-[100dvh] bg-base-100 w-full flex flex-col justify-center items-center gap-16">
      <div className="h-80 p-6 w-full">
        <img
          className="h-full w-full object-fill opacity-80 border-b-1 border-primary-content"
          src="login.svg"
          alt="login logo"
        />
      </div>
      <div className="h-40 w-4/5 flex flex-col gap-4 justify-center items-center">
        <Button className="h-15 w-4/5 text-base-content/50 text-xl rounded-2xl  bg-base-300 shadow-2xl shadow-base-300 flex justify-around items-center ">
          
          <FaGoogle className="h-2/5 w-9 p-0" />
          Google Login
        </Button>
        
          <Button
            onClick={Emailform}
            className="h-15 w-4/5 text-base-content/50 text-xl rounded-2xl  bg-base-300 shadow-2xl shadow-base-300 flex justify-around items-center "
          >
            <MdEmail className="h-2/5 w-9 p-0" /> Email Login
          </Button>
        {loginPortal &&
          createPortal(
            <>
              {console.log("Portal is rendering")}
              <EmailLoginForm setLoginPortal={setLoginPortal}/>
            </>,
            document.body
          )}
      </div>
    </div>
  );
};

export default LoginPage;
