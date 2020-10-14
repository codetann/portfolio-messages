import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import InfoBar from "./InfoBar";
import ChatBox from "./ChatBox";
import Input from "./Input";

let socket;

const Chat = ({ location }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const ENDPOINT = "https://portfolio-messages.herokuapp.com/";

  useEffect(() => {
    const { username, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setUsername(username);
    setRoom(room);

    socket.emit("join", { username, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
    // if these two paramaters change the useEffect will rerender
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  // function for sending messages
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outer-container">
      <div className="info-container">
        <i class="far fa-comment-alt"></i>
        <h1>Messages</h1>
        <p>
          A simple chat room application developed using React, Node.js,
          Express, and Socket.io. To learn more, click the button below.
        </p>
        <button>Learn More</button>
      </div>
      <div className="chat-container">
        <InfoBar roomname={room} />
        <ChatBox messages={messages} username={username} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
