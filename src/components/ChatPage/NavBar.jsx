import { useState, useCallback } from "react";
import { MdOutlineMenu } from "react-icons/md";
import PropTypes from "prop-types";
import { Settings } from "../Profile/Settings.jsx";
import { AnimatePresence, motion } from 'framer-motion';
import { useSelector } from "react-redux";
import { selectProfilePic } from "../../features/selectors/userSelector.js";

const NavBar = ({ setSearchBarStatus }) => {
  const [navOpenStatus, setNavOpenStatus] = useState(false);
  const [accountBtnStatus, setAccountBtnStatus] = useState(false);
  const [themeSetting, setThemeSetting] = useState(false);
  const [imageContainer, setImageContainer] = useState(false);
  const ProfilePic = useSelector(selectProfilePic)

  // Using for Arrow to show up Blocked Users
  const [arrow, setArrow] = useState(false);
  const [privacyStatus, setPrivacyStatus] = useState({
    open: false,
    status: "online",
    Blocked: [],
  });
  
  const closeSettings = useCallback(() => {
      setNavOpenStatus(false);
  }, []);
  
  const handleSearchBtn = (e) => {
    e.stopPropagation();
    setSearchBarStatus((prev) => !prev);
  };

  return (
    <div className="w-full p-2 fixed top-0 left-0 bg-base-300 z-10">
      <AnimatePresence
        mode="wait" 
        initial={false} // Don't animate on first render
        // onExitComplete={() => console.log("Exit animation fully completed")}
      >
        {navOpenStatus && (
          <Settings
            setNavOpenStatus={closeSettings}
            accountBtnStatus={accountBtnStatus}
            setAccountBtnStatus={setAccountBtnStatus}
            arrow={arrow}
            setArrow={setArrow}
            themeSetting={themeSetting}
            setThemeSetting={setThemeSetting}
            imageContainer={imageContainer}
            setImageContainer={setImageContainer}
            privacyStatus={privacyStatus}
            setPrivacyStatus={setPrivacyStatus}
            key="settings-panel"
          />
        )}
      </AnimatePresence>
      
      <div 
        className="h-18 bg-base-300 min-w-fit w-full rounded-xl flex flex-row items-center justify-between font-semibold backdrop-blur-6xl shadow-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 p-2"
        // animate={{ opacity: navOpenStatus ? 0.5 : 1 }}
      >
        <div className="h-4/5 flex min-w-fit flex-row justify-center items-center pl-1 gap-4">
          <div
            className="h-full min-w-auto max-w-15 shadow-lg shadow-black flex items-center justify-center border-2 border-base-content rounded-xl  overflow-hidden"
            onClick={() => setNavOpenStatus((prev) => !prev)}
          >
            <img className="h-full w-auto object-cover" src={ProfilePic} alt="profile pic"/>
          </div>
          <span className="text-xl">
            Conversations
          </span>
        </div>
        <div
          className="h-full flex items-center min-w-fit"
          onClick={(e) => handleSearchBtn(e)}
        >
          <svg
            className="w-10 h-6 ml-2 text-teal-400 hover:text-teal-300 transition-colors duration-200"
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
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  setSearchBarStatus: PropTypes.func.isRequired,
};
