import React, { useState, useEffect } from "react";
import "../App.scss";

const NotificationsPage = () => {
  // Mock messages data for demonstration
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "User1",
      message: "Hello!",
      timestamp: "2 minutes ago",
    },
    {
      id: 2,
      sender: "User2",
      message: "How are you?",
      timestamp: "1 hour ago",
    },
    {
      id: 3,
      sender: "User3",
      message: "Are you free today?",
      timestamp: "5 hours ago",
    },
    // Add more messages as needed
  ]);

  return (
    <div className="notifications-page">
      <h1>Notifications</h1>
      <div className="messages-container">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <div className="message-sender">{message.sender}</div>
            <div className="message-content">{message.message}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationsPage;
