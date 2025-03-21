
export const Footer = ({ handleMessage,message,setMessage }) => {

  return (
    <div className="absolute bottom-0 left-0 h-[6rem] w-full p-2">
      <div className="h-full border-1 bg-base-100 rounded-2xl p-2 flex flex-row justify-around items-center">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          title="message"
          name="message"
          className="w-4/6 h-3/4 rounded-md bg-base-content/30 p-2 focus:outline-2 focus:outline-black"
          placeholder="Message"
        />
        <button
          onClick={handleMessage}
          type="submit"
          className="border-1 border-base-content text-base-content/50 h-2/3 w-2/10 rounded-md font-bold bg-base-200 text"
        >
          {" "}
          Send
        </button>
      </div>
    </div>
  );
};
