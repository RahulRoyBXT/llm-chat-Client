import { useEffect, useRef, useState } from "react";
import { ChatNavBar } from "./ChatNavBar";
import { Footer } from "./Footer";
// import { SenderMessage } from "./Ui/SenderMessage";
// import { UserMessage } from "./Ui/UserMessage";
import { useLocation, useParams } from "react-router-dom";

const messages = [
  {
    id: 1,
    sender: "user",
    content: "Hello!",
    status: 'Delivered',
    timeStamp: '12:45'
  },
  {
    id: 2,
    sender: "bot",
    content: "Hi there! How can I help you today?",
    status: 'Delivered',
    timeStamp: '12:45'
    
  },
  {
    id: 3,
    sender: "user",
    content: "I need some assistance with my account.",
    status: 'Delivered',
    timeStamp: '12:45'
  },
  {
    id: 4,
    sender: "bot",
    content: "Sure, I can help with that. What seems to be the problem?",
    status: 'Delivered',
    timeStamp: '12:45'
  },
];

export const Chat = () => {
  const [user, setUser] = useState(messages);
  // const {chats} = useParams()
  const location = useLocation();
  const { chats } = useParams();
  const images = location.state.image;

  const messageEndRef = useRef(null);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [user.length]);

  return (
    <main className="chat bg-neutral min-h-screen max-h-screen w-full relative">
      <ChatNavBar name={chats} images={images} />
      <div className="h-[calc(100dvh-6rem)] pt-[6rem] p-4 w-full">
        <div className="bg-base-100 text-base-content h-full w-full rounded-xl p-2 overflow-auto">
          <div className="h-fit w-full">
            {user &&
              user.map((data, index) => {
                return data.sender === "bot" ? (
                  <div className="d-chat d-chat-start" key={index}>
                    <div className="d-chat-image d-avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>
                    <div className="d-chat-header">
                      {data.sender}
                      {/* <time className="text-xs opacity-50">12:45</time> */}
                    </div>
                    <div className="bg-base-200 d-chat-bubble">{data.content}</div>
                    <div className="d-chat-footer opacity-50">{data.timeStamp}</div>
                  </div>
                ) : (
                  <div className="d-chat d-chat-end" key={index}>
                    <div className="d-chat-image d-avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS chat bubble component"
                          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                        />
                      </div>
                    </div>
                    <div className="d-chat-header">
                      {data.sender}
                      <time className="text-xs opacity-50">{data.timeStamp}</time>
                    </div>
                    <div className="bg-base-300 d-chat-bubble">{data.content}</div>
                    {/* <div className="d-chat-footer opacity-50">Seen at {data.timeStamp}</div> */}
                    <div className="d-chat-footer opacity-50">{data.status}</div>

                  </div>
                );
              })}
            <div ref={messageEndRef} />
          </div>
        </div>
      </div>
      <Footer setUser={setUser} />
    </main>
  );
};
