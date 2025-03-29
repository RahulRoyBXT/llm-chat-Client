import { IoMdAdd } from "react-icons/io";
import { MdFileDownloadDone } from "react-icons/md";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectUserId } from "../../features/selectors/userSelector";
import { useEffect, useState } from "react";
import ComingSoon from "./popups/FriendsOptionsPopups";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const BodyFriends = ({ allUsers, loading, error }) => {
  const [comingSoon, setComingSoon] = useState(false);
  const [usersData, setUsersData] = useState(null);

  const userId = useSelector(selectUserId);

  useEffect(() => {
    if (allUsers.length > 0) {
      setUsersData(allUsers);
    }
  }, [allUsers.length]);
  console.log("all data:", allUsers);
  if (loading)
    return <div className="border-2 w-full min-h-auto">Loading users...</div>;

  if (error)
    return (
      <div className="border-2 w-full min-h-auto">
        Error: {typeof error === "string" ? error : "Failed to load users"}
      </div>
    );

  if (!usersData) {
    return null;
  }
  return (
    <AnimatePresence>
    <motion.div
     initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0 }}
      className="w-full min-h-auto">
      <div className=" flex flex-col justify-center items-center w-full pt-4">
        {usersData.map((user, index) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            exit={{ opacity: 0, x:-100, delay: 0.5}}
            key={user._id}
            className="user-item p-2 my-2 border w-[80%] bg-yellow-500 rounded-xl flex justify-between items-center"
          >
            <div className="flex items-center">
              <img
                src={user.userPhoto}
                alt={user.name}
                className="w-10 h-10 rounded-full mr-3 object-cover"
              />
              <div>
                <h3 className="font-bold">{user.name}</h3>
                <p className="text-sm text-gray-700">{user.email}</p>
              </div>
            </div>
            <div
              className="text-2xl text-black hover:text-blue-600 focus:bg-blue-600"
              onClick={() => setComingSoon(true)}
            >
              {user.friends.length > 0 ? (
                user.friends.map((friend) =>
                  friend === userId ? (
                    <MdFileDownloadDone key={friend} />
                  ) : (
                    <IoMdAdd key={friend} />
                  )
                )
              ) : (
                <IoMdAdd key={user._id} />
              )}
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
          </motion.div>
        ))}
      </div>
    </motion.div>
    </AnimatePresence>
  );
};

BodyFriends.propTypes = {
  allUsers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      userPhoto: PropTypes.string.isRequired,
      friends: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
  ]),
};

BodyFriends.defaultProps = {
  allUsers: [],
  loading: false,
  error: null,
};

export default BodyFriends;
