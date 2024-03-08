import React from "react";

const Messages = ({ messages }) => {
  return (
    <div className="messages-container">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`message ${
            message.sender === "user" ? "sent" : "received"
          }`}
        >
          <div className="avatar">
            <img src={message.avatar} alt="User Avatar" />
          </div>
          <div className="message-content">
            <p>{message.content}</p>
            <span className="timestamp">{message.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
