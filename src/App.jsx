import { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { BrowserView, MobileView } from "react-device-detect";
import { createPortal } from "react-dom";
import SimpleClock from "../features/Clock";
import { useDispatch, useSelector } from "react-redux";
import { checkLoginStatus } from "./features/authSlice";

// import { UserDataProvider } from "./context/UserDataProvider"

const App = () => {

  const dispatch = useDispatch();
  const {loading, error} = useSelector((state)=> state.auth || null)


  useEffect(()=>{
    dispatch(checkLoginStatus())
  },[])

  console.log(error, loading)
  return (
    <main>
    {/* {loading && alert('logged in')}
    {error && alert('not logged in')} */}
      <BrowserView>
        {createPortal(
          <div className="absolute z-50 top-0 left-0 h-screen w-screen bg-base-100 text-base-content/50 text-2xl flex flex-col justify-center items-center gap-4">
           <div className="h-[70vh] w-full flex flex-row justify-center items-center gap-4">
            <img className="rounded-xl w-[30%]" src="https://i.giphy.com/lk6AqFz5KRWPQaAxbk.webp" alt="hard coding"/>
            <SimpleClock />
           </div>
            <p>We are Working on Desktop Application.</p>

          </div>,
          document.body
        )}
      </BrowserView>
      <MobileView>
      <Suspense fallback={<div>loading...</div>}>
        <Outlet />
      </Suspense>
      </MobileView>
    </main>
  );
};

export default App;
