import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "../../features/userSlice";
import { selectUserId } from "../../features/selectors/userSelector";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../allUsers/Navbar";
import BodyFriends from "../allUsers/Body";
import { Posts } from "./Posts";

export const UsersPage = () => {
  const [page, setPage] = useState({
    friends: true,
    posts: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoogedIn = useSelector(selectUserId);

  const { allUsers, error, loading } = useSelector((state) => state.users);

  console.log("Data: ", allUsers);

  useEffect(() => {
    dispatch(GetAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (!LoogedIn && !loading) {
      navigate("/login");
    }
  }, [LoogedIn, loading, navigate]);

  return (
    <div
      className={`min-h-[100dvh] max-h-auto transition duration-1000 ease-in-out p-4 ${
        page.friends ? "bg-yellow-900" : "bg-blue-900"
      }`}
    >
      <Navbar page={page} setPage={setPage} />
      {page.friends && (
        <BodyFriends loading={loading} allUsers={allUsers} error={error} />
      )}
      {page.posts && (
        <Posts/>
      )}
    </div>
  );
};
