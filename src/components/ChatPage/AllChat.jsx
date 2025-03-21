import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { NavLink, useNavigate } from "react-router-dom";
import { SeachBar } from "./SeachBar";
// import { useUserData } from "../../hooks/useUserData";
import { useDebounce } from "react-use";
// import { useGetAllUsersQuery } from "../../API/apiSlice";
import { setUsers, setFilteredData } from "../../features/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { FaSortUp } from "react-icons/fa";
import { FaSortDown } from "react-icons/fa";
import { CgCommunity } from "react-icons/cg";
import { IoIosAddCircleOutline } from "react-icons/io";
import { DeviceSpecificResponse } from "../../DeviceSpacific/DeviceDetection.jsx";
import { FriendList } from "../../features/friendsSlice.js";
import { selectAllfriends } from "../../features/selectors/friendSelector.js";

let Data = [];

const AllChat = () => {
  const dispatch = useDispatch();

  const selectedFilteredUserData = useSelector(
    (state) => state.users.filteredData
  );

  const [searchBarStatus, setSearchBarStatus] = useState(false);
  // Search Options
  const [searchField, setSearchField] = useState("");
  const [debounceSearchTerm, setDebounceSearchTerm] = useState("");

  const [openMoreOption, setOpenMoreOption] = useState(false);

  const [DevicePopupStatus, setDevicePopupStatus] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const navigate = useNavigate();
  useDebounce(() => setDebounceSearchTerm(searchField), 500, [searchField]);

  const selectUser = useSelector((state) => state.auth.user);

  const selectFriends = useSelector(selectAllfriends);


  useEffect(() => {
    if (selectFriends) {
      dispatch(setUsers(selectFriends)); // Stored users in redux
      dispatch(setFilteredData(selectFriends)); // Stored data to filtered
    }
  }, [selectFriends, dispatch]);

  useEffect(() => {
    if (!selectUser) {
      navigate("/login");
    }
  }, [selectUser, navigate]);


  useEffect(() => {
    if (!selectFriends.length> 0 && selectUser?.id) {
      dispatch(FriendList(selectUser.id));
    }
  }, [selectUser?.id, dispatch, selectFriends]);


  useEffect(() => {
    if (debounceSearchTerm === "") {
      dispatch(setFilteredData(selectFriends));
    }

    if (debounceSearchTerm) {
      Data = selectFriends.filter((values) =>
        values.name
          .toLowerCase()
          .includes(debounceSearchTerm.toLowerCase())
      );
      dispatch(setFilteredData([...Data]));
    }

  }, [debounceSearchTerm, dispatch, selectFriends]);


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
            {/* {profilePic} */}
            <DeviceSpecificResponse
              setDeferredPrompt={setDeferredPrompt}
              deferredPrompt={deferredPrompt}
              setDevicePopupStatus={setDevicePopupStatus}
              DevicePopupStatus={DevicePopupStatus}
            />
            {selectedFilteredUserData?.length > 0 ? (
              selectedFilteredUserData.map((user, index) => {
                return (
                  <div
                    className="h-20 flex flex-row items-center text-xl border-2 border-base-100/50 shadow-2xl"
                    key={index}
                  >
                    <div className="min-h-[50px] h-full min-w-[60px] w-1/6 py-2 rounded-xl object-contain">
                      <img
                        className="h-full w-full rounded-4xl"
                        src={user.userPhoto}
                        alt="profile pic"
                      />
                    </div>
                    <NavLink
                      to={`/chat/${user.name}`}
                      state={{ image: user.userPhoto, email: user.email, name: user.name, id: user._id}}
                      className="h-full w-full"
                    >
                      <div className="h-full w-[calc(90%)] p-2 text-base-content">
                        <div className="h-1/2 w-full text-xl">{user.name}</div>
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
        <div
          className="w-[90%] h-12 border-1 flex justify-center items-center rounded-2xl bg-base-300 shadow-md shadow-base-content"
          onClick={() => setOpenMoreOption((pre) => !pre)}
        >
          {!openMoreOption ? (
            <FaSortDown className="text-4xl text-base-content" />
          ) : (
            <FaSortUp className="text-4xl text-base-content" />
          )}
        </div>
        {openMoreOption && (
          <>
            <div
              className="w-[90%] shadow-md shadow-base-content h-12 border-1 flex justify-center items-center rounded-2xl bg-base-300"
              onClick={() => setOpenMoreOption((pre) => !pre)}
            >
              <IoIosAddCircleOutline className="text-4xl text-base-content" />
            </div>
            <div
              className="w-[90%] shadow-md shadow-base-content h-12 border-1 flex justify-center items-center rounded-2xl bg-base-300"
              onClick={() => setOpenMoreOption((pre) => !pre)}
            >
              <CgCommunity className="text-4xl text-base-content" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default AllChat;
