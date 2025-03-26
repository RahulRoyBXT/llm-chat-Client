import React from 'react'
import { FaSortDown, FaSortUp } from 'react-icons/fa6'
import { RiArrowGoBackFill } from "react-icons/ri";

const PrivacyStatus = ({setArrow,arrow,privacyStatus,setPrivacyStatus}) => {
  return (
    <div className="bg-base-300 w-full h-full z-10 absolute left-0 top-0 p-4 text-base-content flex flex-col gap-4">
          <div className="h-[10%] w-full text-4xl flex flex-row justify-between items-center">
            <RiArrowGoBackFill
              onClick={() =>
                setPrivacyStatus((pre) => ({ ...pre, open: false }))
              }
              className="border-2 rounded-xl"
            />
          </div>
          <hr />
          <div className="h-content w-full flex flex-col gap-4">
            <div className="text-base-content text-2xl p-2 border-1">Info</div>
            <div className="h-10 flex flex-row gap-4">
              <label className="text-2xl" htmlFor="userStatus">
                Status:{" "}
              </label>
              <select
                className="focus:bg-dark/50 text-base-content p-2 border-0 border-red-0 w-[50%] max-w-full border-b-2"
                id="userStatus"
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
            </div>
            <div className="w-full text-2xl p-2">
              <div className="flex flex-row justify-between">
                <p>Blocked</p>
                <div
                  className="border-2 border-base-content w-10 h-8 flex justify-center items-center rounded-md"
                  onClick={() => setArrow((prev) => !prev)}
                >
                  {arrow ? (
                    <FaSortDown className="" />
                  ) : (
                    <FaSortUp className="" />
                  )}
                </div>
              </div>
              {/* Main Content */}

              <div
                className={`${
                  arrow ? "flex" : "hidden"
                } p-4 text-xl font-sans w-full`}
              >
                <div className="w-full border-b-2 h-10 flex flex-row justify-between text-base-content">
                  <p>Name :</p> <p>Rahul Roy</p>
                  <button className="mb-2 w-10 text-center bg-base-300 rounded-md shadow-sm shadow-base-100">
                    x{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default PrivacyStatus
