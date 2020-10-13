import React from "react";

export default function Input({ message, setMessage, sendMessage }) {
  return (
    <form className="send">
      <input
        placeholder="Enter Message Here..."
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter" ? sendMessage(event) : null
        }
      />
      <button className="send-btn" onClick={(event) => sendMessage(event)}>
        Send
      </button>
    </form>
  );
}
