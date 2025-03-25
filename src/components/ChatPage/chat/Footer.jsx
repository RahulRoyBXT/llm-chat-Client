import { IoSendOutline } from "react-icons/io5";

export const Footer = ({ handleMessage,message,setMessage }) => {

  return (
    <div className="absolute bottom-0 left-0 h-[6rem] w-full p-2">
      <div className="h-[90%] border-1 bg-base-100 rounded-4xl p-2 flex flex-row justify-between items-center">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          title="message"
          name="message"
          className="w-5/6 h-full rounded-md  p-2 focus:outline-0 focus:outline-black text-xl"
          placeholder="Message"
        />
        <button
          onClick={handleMessage}
          type="submit"
          className=" border-2 text-base-content/50 h-3/3 w-15 rounded-3xl font-bold bg-[#30ba74]/80 flex justify-center items-center"
        >
          {" "}
          <IoSendOutline  className="text-white font-black text-2xl"/>
        </button>
      </div>
    </div>
  );
};
