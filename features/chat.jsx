import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  const token = localStorage.getItem("token"); // Will have store token to local storage.
  
  useEffect(() => {
    // Initialize socket inside effect
    socketRef.current = io("http://localhost:5000", {
      auth: { token },
      reconnection: true,
      reconnectionAttempts: 5,
      transports: ["websocket", "polling"],
      withCredentials: true,
    });

    socketRef.current.on("connect", () => {
      console.log("Socket connected:", socketRef.current.id);
    });

    socketRef.current.on("message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      if (socketRef.current) {
        socketRef.current.off("message");
        socketRef.current.close();
      }
    };
  }, [token]);
  
  const sendMessage = () => {
    if (socketRef.current) {
      // Ensure socket is initialized
      socketRef.current.emit("message", message); // Use socketRef.current
      setMessage(""); // Clear the input field
    } else {
      console.error("Socket is not connected");
    }
  };


  return (
    <div>
      <h2>Chat</h2>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;
