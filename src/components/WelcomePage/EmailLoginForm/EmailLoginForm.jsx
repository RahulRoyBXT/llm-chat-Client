import React, { useEffect, useState } from "react";
import { Button } from "../Continue-agreement/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, LogoutUser, resetError } from "../../../features/authSlice";

export const EmailLoginForm = ({ setLoginPortal }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [closeError, setCloseError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth || null);

  const handleCancel = () => {
    setLoginPortal(false);
  };

  const handleLogin = async () => {
    if (email === "" || password === "") return;
      await dispatch(loginUser({ email, password })).unwrap(); // Dispatched action
      // navigate("/all-chats")
  };

  const closeErrorBtn = () => {
    setCloseError(false);
    dispatch(resetError());
  };

  const HandleLogout = ()=> {
    dispatch(LogoutUser())
  }

  useEffect(()=>{
   return ()=> dispatch(resetError())

  },[dispatch])

  return (
    <div className="h-1/2 w-screen bg-base-300 z-50 flex justify-center items-center transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2">
      <div className="bg-base-200 w-4/5 h-4/5 flex flex-col justify-center items-center rounded-lg">
        <form className="flex flex-col gap-4 w-full h-1/2 items-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            placeholder="Email"
            className="w-4/5 h-1/3 bg-base-100 text-black text-xl rounded-lg p-4 border-1 border-blue-600 focus:text-base-content focus:border-base-content"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            name="password"
            placeholder="Password"
            className="w-4/5 h-1/3 bg-base-100 text-black text-xl rounded-lg p-4 border-1 border-blue-600 focus:text-base-content focus:border-base-content"
          />
        </form>

        <div className="flex justify-between w-full">
          <Button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={handleCancel}
          >
            Cancel
          </Button>{" "}
          <Button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer"
            onClick={HandleLogout}
          >
            Logout
          </Button>{" "}
          <Button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer ${
              loading ? "disabled:bg-zinc-700 disabled:cursor-not-allowed" : ""
            }`}
            onClick={() => handleLogin()}
            disabled={loading}
          >
            {loading ? "Loading..." : "Login"}
          </Button>
          {error && (
            <div
              className={`${
                closeError && "hidden"
              } transform translate-x-[-50%] translate-y-[-50%] absolute top-1/2 left-1/2 h-1/2 w-full bg-base-300/80 z-60 text-2xl text-base-content flex justify-center items-center gap-5 flex-col`}
            >
              <span>{error}</span>
              <button
                className="p-2 border-2 rounded-md"
                onClick={closeErrorBtn}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
