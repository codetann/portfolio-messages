import React from "react";

export default function Message({ message: { user, text }, username }) {
  let isSentByCurrentUser = false;

  const trimmedName = username.trim().toLowerCase();
  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="message-container user-sent">
      <div className="message bgp">
        <h4 className="sentText">{user}</h4>
        <div className="message-box">
          <p className="message-text">{text}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="message-container not-user">
      <div className="message">
        <h4 className="sentText">{user}</h4>
        <div className="message-box">
          <p className="message-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
