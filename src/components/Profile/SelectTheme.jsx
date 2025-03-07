import React from 'react'
import { IoReturnDownBack } from 'react-icons/io5'
import ThemeSwitcher from '../../Theme/ThemeSwitcher'

export const SelectTheme = ({themeSetting, setThemeSetting}) => {
  return (
    <div className="bg-base-300 w-full h-full z-10 absolute left-0 top-0 p-4 text-base-content flex flex-col gap-4">
          <div className="h-[10%] w-full text-4xl flex flex-row justify-between items-center">
            <IoReturnDownBack
              onClick={() => setThemeSetting(false)}
              className="border-2 rounded-xl"
            />
          </div>
          <hr />
          <div className="h-full w-full overflow-auto">
            <ThemeSwitcher />
          </div>
        </div>
  )
}

