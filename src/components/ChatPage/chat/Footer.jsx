import { useState } from "react";

export const Footer = ({ setUser }) => {
  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    e.preventDefault();
    setUser((pre) => [
      ...pre,
      {
        id: crypto.randomUUID(),
        sender: "user",
        content: message,
        timeStamp: (() => {
          let currentData = new Date();
          let hours = currentData.getHours();
          let minutes = currentData.getMinutes();

          // Minutes are Two Digi
          minutes = minutes < 10 ? "0" + minutes : minutes;

          // Return format
          return hours + ":" + minutes;
        })(),
        status: 'sent'
      },
    ]);
    setMessage("");
  };
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
          onClick={(e) => handleMessage(e)}
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
