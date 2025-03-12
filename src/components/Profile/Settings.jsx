import { ImCross } from "react-icons/im";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiAccountCircle2Fill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { Account } from "./Account";
import { SelectTheme } from "./SelectTheme";
import PrivacyStatus from "./PrivacyStatus";
import ProfileImageContainer from "../Popups/ProfileImageContainer";
import { useSelector } from "react-redux";
import { selectProfilePic, selectUserName } from "../../features/selectors/userSelector";


export const Settings = ({ setNavOpenStatus, accountBtnStatus, setAccountBtnStatus, arrow, setArrow, themeSetting, setThemeSetting, imageContainer, setImageContainer, privacyStatus, setPrivacyStatus}) => {
  
  const profilePic = useSelector(selectProfilePic)
  const userName = useSelector(selectUserName)

  return (
    <div className="min-h-content w-full rounded-xl flex flex-row backdrop-blur-6xl shadow-base-100 shadow-2xl p-4 bg-base-100">
      <div className="h-full w-full p-2 flex flex-col gap-4">
        <div className="w-full">
          <ImCross
            className="text-base-content text-2xl"
            onClick={() => setNavOpenStatus(false)}
          />
        </div>
        <div className="h-full w-full p-4 border-2 bg-base-300 relative">
          {/* Profile Section */}
          <div className="h-full w-full text-base-content">
            <div className="h-[40%] w-full flex flex-col items-center gap-4">
              <div
                className="h-[70%] bg-amber-950 w-[50%] rounded-2xl"
                onClick={() => {
                  if(profilePic){
                  setImageContainer(true)}}
                  }
              >
                {profilePic? <img
                  className="h-full w-full rounded-2xl object-cover"
                  src={profilePic}
                  alt="Profile Pic"
                />:
                <img
                  className="h-full w-full rounded-2xl object-cover"
                  src='/no-chat.gif'
                  alt="Profile Pic"
                />
                }
              </div>
              <div className="text-2xl">
                {" "}
                <p> {userName || 'What is your name?'} </p>{" "}
              </div>
            </div>

            {/*Settings*/}
            <div className="h-content w-full flex flex-col gap-4">
              <div className="flex w-full flex-row gap-6 items-center text-xl border-2 border-base-100/50 shadow-2xl p-4">
                {" "}
                <span className="border-r-2 w-[20%] flex justify-center items-center text-4xl">
                  <RiAccountCircle2Fill />
                </span>
                <span
                  onClick={() => setAccountBtnStatus(true)}
                  role="button"
                  tabIndex={0}
                  className="w-[80%] hover:bg-primary/20 h-full"
                >
                  Account
                </span>
              </div>
              <div className="flex w-full flex-row gap-6 items-center text-xl border-2 border-base-100/50 shadow-2xl p-4">
                <span className="border-r-2 w-[20%] flex justify-center items-center text-4xl">
                  <SiGnuprivacyguard />
                </span>
                <span
                  role="button"
                  tabIndex={0}
                  className="w-[80%] hover:bg-primary/20 h-full"
                  onClick={() =>
                    setPrivacyStatus((prev) => ({ ...prev, open: "true" }))
                  }
                >
                  Privacy
                </span>
              </div>
              <div className="flex w-full flex-row gap-6 items-center text-xl border-2 border-base-100/50 shadow-2xl p-4">
                {" "}
                <span className="border-r-2 w-[20%] flex justify-center items-center text-4xl">
                  <IoColorPaletteOutline />
                </span>
                <span
                  role="button"
                  tabIndex={0}
                  className="w-[80%] hover:bg-primary/20 h-full"
                  onClick={() => setThemeSetting(true)}
                >
                  Theme
                </span>
              </div>
            </div>
          </div>

          {/* Popup options for account*/}
          {accountBtnStatus && 
            <Account accountBtnStatus= {accountBtnStatus} setAccountBtnStatus={setAccountBtnStatus}/>
          }

          {/* Privacy status */}
          {privacyStatus.open && 
            <PrivacyStatus setArrow={setArrow} arrow={arrow} privacyStatus={privacyStatus} setPrivacyStatus={setPrivacyStatus}/>
          }

          {/* Theme */}
          {themeSetting &&
            <SelectTheme themeSetting={themeSetting} setThemeSetting={setThemeSetting}/>
          }

          {imageContainer && 
            <ProfileImageContainer profilePic={profilePic} setImageContainer={setImageContainer}/>
          }
        </div>
      </div>
    </div>
  );
};
