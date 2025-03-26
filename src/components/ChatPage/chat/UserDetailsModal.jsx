import React, { useState } from "react";
import { IoReturnDownBack } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoNotificationsOffOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { RiArrowGoBackFill } from "react-icons/ri";
import ComingSoon from "../../../ComingSoon/ComingSoon";
import { AnimatePresence } from "framer-motion";
export const UserDetailsModal = ({ user, onClose }) => {
  const [comingSoon, setComingSoon] = useState(false);

  const handlePropagations = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={onClose} className="h-[100dvh] w-full bg-transparent">
      <div
        onClick={handlePropagations}
        className="bg-base-300 w-full min-xxs:h-[50dvh] max-xxs:h-[60dvh] z-10 absolute left-0 top-0 min-xxs:p-4 max-xxs:p-6"
      >
        <div className="h-full w-full bg-base-200 rounded-4xl border-1 border-base-content flex flex-col justify-center items-center relative">
          <RiArrowGoBackFill
            onClick={onClose}
            className="absolute top-5 left-5 border-1 p-2 h-10 w-10 rounded-xl"
          />
          <div className="h-full w-full flex flex-col justify-center items-center gap-4">
            <div className="min-h-[40%] max-h-[60%] min-w-[30%] w-[50%] max-w-[60%] object-cover rounded-2xl">
              <img
                className="h-full w-full rounded-2xl"
                src={user?.image}
                alt={user?.name}
              />
            </div>
            <span
            onClick={() => setComingSoon((pre=> !pre))}
             className="text-2xl border-b-1">{user?.name}</span>
            <div className="h-15 w-full flex flex-row justify-around bg-base-200/20">
              <div
                onClick={() => setComingSoon((pre=> !pre))}
                className="h-[80%] border-1 w-[3rem] rounded-xl flex justify-center items-center shadow-lg shadow-base-content/30 backdrop-sepia-600"
              >
                <IoNotificationsOutline className="h-[60%] w-[60%] text-base-content " />
              </div>

              <AnimatePresence>
                {comingSoon && (
                  <ComingSoon
                    key="comingSoonModal"
                    KEY="comingSoonModal"
                    onClick={() => setComingSoon(false)}
                  />
                )}
              </AnimatePresence>

              <div
               onClick={() => setComingSoon(pre=> !pre)}
               className="h-[80%] border-1 w-[3rem] rounded-xl flex justify-center items-center shadow-lg shadow-base-content/30 backdrop-sepia-600">
                <IoSearch className="h-[60%] w-[60%] text-base-content" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
