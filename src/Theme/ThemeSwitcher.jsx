import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  dark,
  light,
  dracula,
  aqua,
  coffee,
  night,
  abyss,
  synthwave,
} from "../features/ThemeSlice.js";
const themeActions = {
    light,
    dark,
    dracula,
    aqua,
    coffee,
    night,
    abyss,
    synthwave,
  };

const ThemeSwitcher = () => {

  const selectedTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.querySelector("body").setAttribute("data-theme", selectedTheme);
  }, [selectedTheme, dispatch]);

  return (
    <div className="dropdown dropdown-end">
      <button tabIndex={0} className="d-btn d-btn-base-300">
        Selected Theme: {selectedTheme}
      </button>
      <ul
        tabIndex={0}
        className="h-full w-full dropdown-content menu p-2 shadow-xl d-bg-base-100 rounded-box flex flex-col gap-4"
      >
        {Object.entries(themeActions).map(([ActionName, ActionState],index) => (
          <li className="text-4xl" key={ActionName}>
            <button
              className="d-btn d-btn-sm w-full h-15 shadow-md shadow-base-content/10 flex justify-center"
              onClick={() => dispatch(ActionState())}
            >
                <span className="flex justify-center items-center">{index+1}.</span>
              {ActionName}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ThemeSwitcher;
