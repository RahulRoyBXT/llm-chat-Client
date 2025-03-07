import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
// import { MenueBar } from "../Pages/MenueBar.jsx";
// import { createPortal } from "react-dom";
// import { ImCross } from "react-icons/im";
// import { RiAccountCircle2Fill } from "react-icons/ri";
// import { IoColorPaletteOutline } from "react-icons/io5";
// import { SiGnuprivacyguard } from "react-icons/si";
// import { IoReturnDownBack } from "react-icons/io5";
// import { FaPenToSquare } from "react-icons/fa6";
// import { FaSortUp } from "react-icons/fa";
// import { FaSortDown } from "react-icons/fa";
// import ThemeSwitcher from "../../Theme/ThemeSwitcher.jsx";
import { Settings } from "../Profile/Settings.jsx";

const NavBar = ({ setSearchBarStatus }) => {
  const [navOpenStatus, setNavOpenStatus] = useState(false);
  const [accountBtnStatus, setAccountBtnStatus] = useState(false);
  const [themeSetting, setThemeSetting] = useState(false);
  const [imageContainer, setImageContainer] = useState(false)


  // Using for Arrow to show up Blocked Users
  const [arrow, setArrow] = useState(false)
  const [privacyStatus, setPrivacyStatus] = useState({
    open: false,
    status: "online",
    Blocked: [],
  });
  const handleSearchBtn = (e) => {
    e.stopPropagation();
    setSearchBarStatus((prev) => !prev);
  };

  return (
    <div className="w-full p-2 fixed top-0 left-0 bg-base-300 z-10">
      {navOpenStatus ? (
        <Settings
        setNavOpenStatus = {setNavOpenStatus}
         accountBtnStatus = {accountBtnStatus}  setAccountBtnStatus= {setAccountBtnStatus}
         arrow = {arrow}  setArrow= {setArrow} 
         themeSetting = {themeSetting} setThemeSetting = {setThemeSetting}
         imageContainer = {imageContainer} setImageContainer= {setImageContainer}
         privacyStatus = {privacyStatus} setPrivacyStatus = {setPrivacyStatus}
        />
      ) : (
        <div className="h-18 bg-base-300 w-full rounded-xl flex flex-row items-center justify-between backdrop-blur-6xl shadow-base-100 shadow-2xl">
          <div className="h-4/5 flex min-w-fit">
            <div
              className="h-full w-20 flex items-center justify-center"
              onClick={() => setNavOpenStatus((prev) => !prev)}
            >
              <MdOutlineMenu className="text-4xl text-base-content" />
            </div>
            <div className="h-full p-2 min-w-fit flex items-center justify-center text-2xl text-base-content font-bold">
              Chats
            </div>
          </div>
          <div
            className="h-full flex items-center min-w-fit"
            onClick={(e) => handleSearchBtn(e)}
          >
            <IoIosSearch className="text-3xl text-base-content m-2 border-1 border-base-content" />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
