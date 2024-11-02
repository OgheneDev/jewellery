import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import close from '../assets/images/close-chat.svg';
import { db } from '../firebaseConfig'; // Import Firebase config
import { doc, onSnapshot, setDoc, updateDoc } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

const FloatingChat = ({ isOpen, toggleChat }) => {
  const [userDetails, setUserDetails] = useState({ name: '', email: '', firstMessage: '' });
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [unreadCount, setUnreadCount] = useState(0); // Track unread messages count
  const [lastReadTimestamp, setLastReadTimestamp] = useState(0); // Track the last read timestamp

  useEffect(() => {
    // Load user details, chat state, and last read timestamp from localStorage
    const storedUserDetails = localStorage.getItem('userDetails');
    const storedChatStarted = localStorage.getItem('isChatStarted');
    const storedLastReadTimestamp = localStorage.getItem('lastReadTimestamp');

    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
    if (storedChatStarted) {
      setIsChatStarted(JSON.parse(storedChatStarted));
    }
    if (storedLastReadTimestamp) {
      setLastReadTimestamp(parseInt(storedLastReadTimestamp, 10));
    }

    if (storedUserDetails) {
      const userEmail = JSON.parse(storedUserDetails).email;
      const chatRef = doc(db, 'chats', userEmail);
      const messagesRef = collection(chatRef, 'messages');

      // Listen to new messages from the admin
      const unsubscribe = onSnapshot(messagesRef, (snapshot) => {
        let newUnreadCount = 0;
        snapshot.docs.forEach((doc) => {
          const messageData = doc.data();
          if (messageData.sender === 'Admin' && messageData.timestamp > lastReadTimestamp) {
            newUnreadCount++;
          }
        });
        setUnreadCount(newUnreadCount);
      });

      return () => unsubscribe();
    }
  }, [lastReadTimestamp]);

  const startChat = (e) => {
    e.preventDefault();
    setIsChatStarted(true);
    localStorage.setItem('isChatStarted', JSON.stringify(true));
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
  };

  const handleChange = (e) => {
    const newUserDetails = { ...userDetails, [e.target.name]: e.target.value };
    setUserDetails(newUserDetails);
  };

  return (
    <div>
      <div className="floating-chat-button" onClick={toggleChat}>
        💬
        {unreadCount > 0 && (
          <span className="unread-count-badge">{unreadCount}</span> // Notification badge for unread messages
        )}
      </div>

      <div className={`floating-chat-window ${isOpen ? 'open' : 'closed'}`}>
        <div className="chat-header">
          <div className="head">
            <div className="profile">C</div>
            <h3>Customer Care</h3>
            <p>Chat with our customer care representatives for quick responses</p>
          </div>
          <span style={{ cursor: 'pointer' }} onClick={toggleChat}>
            <img src={close} alt="Close chat" />
          </span>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {!isChatStarted ? (
            <form onSubmit={startChat} className="user-details-form">
              <input
                type="text"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
              <input
                type="email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <input
                type="text"
                name="firstMessage"
                value={userDetails.firstMessage}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                className="first-message"
              />
              <button type="submit">Start Chat</button>
            </form>
          ) : (
            <Chat userDetails={userDetails} />
          )}
        </div>
      </div>
    </div>
  );
};

export default FloatingChat;