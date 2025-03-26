import { IoIosSearch } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { UserDetailsModal } from "./UserDetailsModal";

export const ChatNavBar = ({ name, images, email }) => {
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleBack = (e) => {
    e.stopPropagation()
    history.back();
  };

  const handleUserDetails = ()=> {
    setShowUserDetails(prev => !prev)
  }

  return (
    <div className="w-full p-4 fixed top-0 left-0 z-10 bg-transparent">
      <div
      onClick={handleUserDetails}
       className="h-20 bg-base-100 w-full rounded-md p-4 shadow-2xl shadow-base-300 flex flex-row items-center justify-between backdrop-blur-6xl">
        <div className="h-5/5 flex min-w-fit gap-2 flex-row justify-center items-center">
          <div className="flex h-full min-w-1/4 gap-2 flex-row justify-center items-center">
              <div onClick={handleBack} className="h-full w-fit flex items-center justify-center pr-2">
                <IoChevronBackCircleOutline className="text-2xl text-base-context" />
              </div>
            <div 
              className="h-full w-auto object-cover cursor-pointer"
            >
              <img className="rounded-md h-full w-full" src={images} alt={name} />
            </div>
          </div>
          <div 
            className="h-full p-2 min-w-fit flex items-center justify-center text-xl text-base-context font-bold cursor-pointer"
          >
            {name}
          </div>
        </div>
        <div className="h-full flex items-center w-fit p-2">
        <svg
                className="w-10 h-6 mr-2 text-teal-400 hover:text-teal-300 transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
        </div>
      </div>
      {showUserDetails && (
        <UserDetailsModal 
          user={{ name, image: images, email }}
          onClose={() => setShowUserDetails(false)}
        />
      )}
    </div>
  );
};
