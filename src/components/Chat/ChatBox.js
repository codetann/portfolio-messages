import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message";

export default function ChatBox({ messages, username }) {
  return (
    <ScrollToBottom className="chat-box">
      {messages.map((message, i) => (
        <div key={i}>
          <Message message={message} username={username} />
        </div>
      ))}
    </ScrollToBottom>
  );
}
