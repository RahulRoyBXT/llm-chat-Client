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
    <div className="h-screen w-full flex flex-col justify-center items-center bg-primary gap-16">
      <div className="h-80 p-6 w-full">
        <img
          className="h-full w-full object-fill"
          src="login.svg"
          alt="login logo"
        />
      </div>
      <div className="h-40 w-4/5 flex flex-col gap-4 justify-center items-center">
        <Button className="h-15 w-4/5 text-primary text-2xl rounded-2xl  bg-slate-700 flex justify-around items-center ">
          
          <FaGoogle className="h-4/5 w-9 p-0" />
          Google Login
        </Button>
        
          <Button
            onClick={Emailform}
            className="h-15 w-4/5 text-primary text-2xl rounded-2xl  bg-slate-700 flex justify-around items-center "
          >
            <MdEmail className="h-4/5 w-9 p-0" /> Email Login
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
