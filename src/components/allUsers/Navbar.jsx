import { FaUserFriends } from "react-icons/fa";
import { BsFillPostcardHeartFill } from "react-icons/bs";
import PropTypes from "prop-types";

export const Navbar = ({ page, setPage }) => {
  return (
    <>
      <div className="h-20 w-full flex justify-center items-center p-2">
        <div className="h-full w-[40%] flex flex-row justify-center items-center p-1 gap-6">
          <div
            className={`h-full border-1 p-4 flex justify-center items-center rounded-2xl transition duration-300 ease-in ${
              page.friends
                ? "bg-yellow-400 text-gray-700 shadow-lg shadow-black "
                : ""
            }`}
          >
            <FaUserFriends
              className={`text-[2rem]`}
              onClick={() => setPage({ friends: true, posts: false })}
            />
          </div>
          {/* <div className='h-full w-1 border-1'></div> */}
          <div
            className={`h-full border-1 p-4 flex justify-center items-center rounded-2xl transition duration-300 ease-in ${
              page.posts
                ? "bg-blue-400 text-blue-900 shadow-lg shadow-black"
                : ""
            }`}
          >
            <BsFillPostcardHeartFill
              className="text-[2rem]"
              onClick={() => setPage({ friends: false, posts: true })}
            />
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  page: PropTypes.shape({
    friends: PropTypes.bool.isRequired,
    posts: PropTypes.bool.isRequired,
  }).isRequired,
  setPage: PropTypes.func.isRequired,
};
