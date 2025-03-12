import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";
import { SeachBar } from "./SeachBar";
// import { useUserData } from "../../hooks/useUserData";
import { useDebounce } from "react-use";
import { useGetAllUsersQuery } from "../../API/apiSlice";
import { setUsers, setFilteredData } from '../../features/userSlice.js'
import { useDispatch, useSelector } from "react-redux";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { DeviceSpacificResponse } from "../../DeviceSpacific/DeviceDetection.jsx";

let Data = []
const AllChat = () => {
  // const { userData } = useUserData();
  const {data: userData, error, isLoading } = useGetAllUsersQuery()
  const dispatch = useDispatch()
  const selectedAllUserData = useSelector((state)=> state.users.users)
  const selectedFilteredUserData = useSelector((state)=> state.users.filteredData)
  
  const [searchBarStatus, setSearchBarStatus] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");
  const [openMoreOption, setOpenMoreOption] = useState(false)

    const [DevicePopupStatus, setDevicePopupStatus] = useState(true);
    const [deferredPrompt, setDeferredPrompt] = useState(null);

  useDebounce(() => setDebounceSearchTerm(searchField), 500, [searchField]);

  useEffect(()=>{
    if(userData){
      dispatch(setUsers(userData.users)) // Stored users in redux
      dispatch(setFilteredData(userData.users)) // Stored data to filtered
    }
  }, [userData, dispatch])

  


  useEffect(() => {
    if (debounceSearchTerm === "") {
      dispatch(setFilteredData(selectedAllUserData));
    }
    if (debounceSearchTerm) {
      Data = selectedFilteredUserData.filter((values) =>
        values.firstName
          .toLowerCase()
          .includes(debounceSearchTerm.toLowerCase())
      );
      dispatch(setFilteredData([...Data]));
    }
  }, [debounceSearchTerm, dispatch]);

  if(isLoading) return <p> Loading</p>
  if(error) return <p> cant fetch data</p>
  


  // console.log('main data', selectedUser || null)
  // return(
  //   <div>{Object.values(selectedUser).map(user=> (
  //     <p key={user.id}>{user.firstName}</p>
  //   ))}</div>
  // )
  

  // const [filteredData, setFilteredData] = useState(data.users || []);

  return (
    <>
    <main className="h-screen w-full relative">
      {!searchBarStatus && (
        <NavBar
          setFilteredData={setFilteredData}
          setSearchBarStatus={setSearchBarStatus}
        />
      )}
      {searchBarStatus && (
        <SeachBar
          setSearchField={setSearchField}
          searchField={searchField}
          setSearchBarStatus={setSearchBarStatus}
        />
      )}
      <section className="All-Chat text-3xl min-h-[calc(100%-6rem)] max-h-fit pt-[6rem] w-full p-2 bg-base-300 text-base-content">
        <div className="min-h-[calc(100vh-7rem)] p-2 overflow-y-auto flex flex-col gap-4">
        <DeviceSpacificResponse setDeferredPrompt={setDeferredPrompt} deferredPrompt={deferredPrompt} setDevicePopupStatus={setDevicePopupStatus} DevicePopupStatus={DevicePopupStatus}/>
          {selectedFilteredUserData.length > 0 ? (
            selectedFilteredUserData.map((user) => {
              return (
                <div
                  className="h-20 flex flex-row items-center text-xl border-2 border-base-100/50 shadow-2xl"
                  key={user.id}
                >
                  <div className="min-h-[50px] h-full min-w-[60px] w-1/6 py-2 rounded-xl object-contain">
                    <img
                      className="h-full w-full rounded-4xl"
                      src={user.image}
                      alt="profile pic"
                    />
                  </div>
                  <NavLink
                    to={`/chat/${user.firstName + " " + user.lastName}`}
                    state={{ image: user.image }}
                    className="h-full w-full"
                  >
                    <div className="h-full w-[calc(90%)] p-2 text-base-content">
                      <div className="h-1/2 w-full text-xl">
                        {user.firstName + " " + user.lastName}
                      </div>
                      <div className="h-1/2 w-full text-lg">Last Message</div>
                    </div>
                  </NavLink>
                  <div className="d-status d-status-info animate-bounce absolute right-10 z-1"></div>
                </div>
              );
            })
          ) : (
            <div className="h-[calc(100vh-9rem)] w-full flex flex-col justify-center items-center">
              <div className="p-6 rounded-4xl">
                <img
                  className="h-full w-full rounded-4xl"
                  src="no-chat.gif"
                  alt="no chat"
                />
              </div>
              <span>No Available Chat</span>
            </div>
          )}
        </div>
      </section>
      
    </main>
        <div className="fixed z-20 right-5 bottom-10 h-40 w-15 rounded-xl flex flex-col-reverse items-center gap-2">
            <div className="w-[90%] h-12 border-1 flex justify-center items-center rounded-2xl bg-base-300 shadow-md shadow-base-content" onClick={()=> setOpenMoreOption(pre=> !pre)}>
              {!openMoreOption ?( <FaSortDown className="text-4xl text-base-content"/>):
                (
                  <FaSortUp className="text-4xl text-base-content"/>
                )
              }
            </div>
            {
              openMoreOption && 
            (<>
              <div className="w-[90%] shadow-md shadow-base-content h-12 border-1 flex justify-center items-center rounded-2xl bg-base-300" onClick={()=> setOpenMoreOption(pre=> !pre)}>
              <IoIosAddCircleOutline className="text-4xl text-base-content"/>
            </div>
            <div className="w-[90%] shadow-md shadow-base-content h-12 border-1 flex justify-center items-center rounded-2xl bg-base-300" onClick={()=> setOpenMoreOption(pre=> !pre)}>
            <CgCommunity className="text-4xl text-base-content"/>
            </div>
            </>)
            }
            
        </div>
    </>
  );
};

export default AllChat;
