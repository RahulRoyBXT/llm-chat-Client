import { useEffect, useRef, useState } from "react";
import { ChatNavBar } from "./ChatNavBar";
import { Footer } from "./Footer";
// import { SenderMessage } from "./Ui/SenderMessage";
// import { UserMessage } from "./Ui/UserMessage";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  GetMessages,
  sendMessage,
  updateTempMessage,
} from "../../../features/messageSlice";
import { useSocket } from "../../../context/SocketContext";

import { selectMessage } from "../../../features/selectors/messagesSelector";
import { checkLoginStatus } from "../../../features/authSlice";

export const Chat = () => {
  const [message, setMessage] = useState("");

  const [ totalMessage, setTotalMessage ]= useState('')

  const socket = useSocket();

  // Selectors
  const tempMsg = useSelector(selectMessage);
  const {
    user: currentUser,
    loading,
    error,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { chats } = useParams();

  const images = location?.state?.image || null;
  const email = location?.state?.email || null;
  const receiverName = location?.state?.name || null;
  const receiverId = location?.state?.id || null;
  // Focus Container
  const messageEndRef = useRef(null);

  // Current user as sender
  const senderId = currentUser?.id;
  const senderName = currentUser?.name;

  // if receiver data is not available (receiver == recipient)
  useEffect(() => {
    if (!receiverId) {
      navigate("/all-chats");
    }
  }, [receiverId, navigate]);


  useEffect(() => {
    const verifyLoginStatus = async () => {
      try{
        const response = await dispatch(checkLoginStatus()).unwrap();
        console.log(response.id)
      } catch{
          navigate("/login");
      }
    };
    verifyLoginStatus();
  }, [dispatch, navigate])

  
  // Get request on mount
  useEffect(() => {
    if (senderId && receiverId && !tempMsg?.length > 0) {
      dispatch(GetMessages([senderId, receiverId].sort().join("_")));
    }
  }, [senderId, receiverId, tempMsg?.length, dispatch]);


  useEffect(() => {
    if (socket) {
      socket.on("receive_message", (message) => {
        console.log("Received message:", message);
        dispatch(updateTempMessage(message));
      });
  
      return () => socket.off("receive_message");
    }
  }, [socket, dispatch]);



  // Sending Messages with optimistic UI updates
  const handleMessage = async () => {
    if (!message.trim()) return;

    // Temporary Message

    const tempId = `track-${Date.now()}`;

    const optMessage = {
      uniqueId: tempId,
      sender: senderId,
      receiver: receiverId,
      content: message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      date: new Date().toISOString().split("T")[0],
      status: "sending",
    };
    setMessage("");

    // Updated temp message to temp state
    dispatch(updateTempMessage(optMessage));

    if (socket) {
      socket.emit("send_message", optMessage);
    }

    // POST.data Request to backend to save msg
    try {
      const response = await dispatch(
        sendMessage({
          senderId,
          receiverId,
          content: message,
          uniqueId: tempId,
        })
      ).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  // Focus on last Message
  useEffect(() => {
    const container = messageEndRef.current?.parentElement;
    if (!container) return;

    const atBottom =
      container.scrollHeight - container.scrollTop <=
      container.clientHeight + 50;

    if (atBottom) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [tempMsg?.length]);

  return (
    <main className="chat bg-base-300 min-h-[100dvh] max-h-screen w-full relative">
      <ChatNavBar name={chats} images={images} />
      <div className="h-[calc(100dvh-6rem)] p-4 w-full">
        <div className="bg-base-100 text-base-content pt-[6rem] h-full w-full rounded-xl p-2 overflow-auto">
          <div className="h-fit w-full">
            {tempMsg?.length > 0 &&
              tempMsg.map((data) => {
                return (
                  <div
                    key={data.uniqueId}
                    className={
                      data.sender === senderId
                        ? "d-chat d-chat-end"
                        : "d-chat d-chat-start"
                    }
                  >
                    <div className="d-chat-image d-avatar">
                      <div className="w-10 rounded-full">
                        <img
                          alt="User Avatar"
                          src={
                            data.sender === senderId
                              ? currentUser.photo
                              : images
                          }
                        />
                      </div>
                    </div>
                    <div className="d-chat-header">
                      {data.sender === senderId ? "Me" : receiverName}
                      <time className="text-xs opacity-50">{data.date}</time>
                    </div>
                    <div
                      className={`d-chat-bubble ${
                        data.senderId === senderId
                          ? "bg-base-300"
                          : "bg-base-200"
                      }`}
                    >
                      {data.content}
                    </div>
                    <div className="d-chat-footer opacity-50">
                      {data.sender === senderId ? data.status : data.timestamp}
                    </div>
                  </div>
                );
              })}
            <div ref={messageEndRef} />
          </div>
        </div>
      </div>
      <Footer
        handleMessage={handleMessage}
        message={message}
        setMessage={setMessage}
      />
    </main>
  );
};
