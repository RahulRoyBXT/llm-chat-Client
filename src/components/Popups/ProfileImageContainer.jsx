import { FaPenToSquare } from "react-icons/fa6";

const ProfileImageContainer = ({setImageContainer}) => {
  return (
    <div className="bg-dark w-full h-full z-10 absolute left-0 top-0 p-4 text-base-content flex flex-col gap-4">
      <div className="h-full w-full relative">
        <img
          className="h-full w-full rounded-2xl object-cover"
          src="image.png"
        />
        <span
          onClick={() => setImageContainer(false)}
          className="absolute top-0 left-0 z-20 text-base-content bg-amber-700/20 h-10 w-10 rounded-2xl flex justify-center items-center text-[2rem] border-2 border-black"
        >
          x
        </span>
        <span
          onClick={() => setImageContainer(false)}
          className="right-0 top-0 absolute z-20 text-primary bg-amber-700/20 h-10 w-10 rounded-2xl flex justify-center items-center text-[2rem] border-2 border-black"
        >
          <FaPenToSquare className="text-xl" />
        </span>
      </div>
    </div>
  );
};

export default ProfileImageContainer;
