import React from 'react'
import { FaPenToSquare } from 'react-icons/fa6';
import { IoReturnDownBack } from 'react-icons/io5';

export const Account = ({accountBtnStatus, setAccountBtnStatus}) => {


  return (
    <div className="bg-base-300 w-full h-full z-10 absolute left-0 top-0 p-4 text-base-content flex flex-col gap-4">
          <div className="h-[10%] w-full text-4xl flex flex-row justify-between items-center">
            <IoReturnDownBack
              onClick={() => setAccountBtnStatus(false)}
              className="border-2 rounded-xl"
            />
            <FaPenToSquare className="text-4xl font-medium" />
          </div>
          <hr />
          <div className="text-xl text-base-content min-h-[80%] max-h-[90%] overflow-auto flex flex-col gap-4">
            <div className="text-base-content border-1 p-2 bg-base-100 h-auto w-full">
              Info
            </div>
            <div>
              <p className="text-md">Mobile</p>
              <input
                placeholder="+91 6295825600"
                type="tel"
                className="text-base-content p-2 border-0 border-red-0 w-full"
              />
            </div>
            <div>
              <p className="text-md">Bio</p>
              <input
                type="tel"
                placeholder="Your Bio"
                className="text-base-content p-2 border-0 border-red-0 text-wrap w-full"
              />
            </div>
            <div>
              <p className="text-md">Username</p>
              <input
                type="tel"
                placeholder="@username"
                className="text-base-content p-2 border-0 border-red-0 text-wrap w-full"
              />
            </div>
            {/* Activities */}
            <div className="min-h-[30dvh] w-full mt-2 flex flex-col gap-4">
              <div className="w-full flex justify-center">
                <p>Activities</p>
              </div>
              <hr className="w-full" />
              <div className="text-wrap">
                <p>
                  {" "}
                  Activities are not available yet. This feature is coming real
                  soon.
                </p>
              </div>
            </div>
          </div>
        </div>
  )
}


