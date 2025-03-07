import { IoIosSearch } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const ChatNavBar = ({ name, images }) => {
  const handleBack = () => {
    history.back();
  };

  return (
     <div className='w-full p-2 fixed top-0 left-0 z-10'>
          <div className='h-18 bg-base-100 w-full rounded-xl shadow-base-300 flex flex-row items-center justify-between backdrop-blur-6xl shadow-2xl'>
            <div className='h-4/5 flex min-w-fit gap-2'>
                <div className="flex h-full min-w-1/4 gap-2">
                    <NavLink to='/all-chats'><div className='h-full w-fit flex items-center justify-center'><IoChevronBackCircleOutline className='text-4xl text-base-context'/></div></NavLink>
                    <div className='h-full w-15'><img src={images}/></div>
                </div>
              <div className='h-full p-2 min-w-fit flex items-center justify-center text-2xl text-base-context font-bold'>{name}</div>
            </div>
            <div className='h-full flex items-center w-fit p-2'><IoIosSearch className='text-3xl text-base-context m-2'/></div>
          </div>
        </div>
  );
};
