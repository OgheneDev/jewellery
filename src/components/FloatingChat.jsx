import React, { useState, useEffect } from 'react';
import Chat from './Chat';
import { X, MessageCircle } from 'lucide-react';
import { db } from '../firebaseConfig';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';

const FloatingChat = ({ isOpen, toggleChat }) => {
  const [userDetails, setUserDetails] = useState({ name: '', email: '', firstMessage: '' });
  const [isChatStarted, setIsChatStarted] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const storedUserDetails = localStorage.getItem('userDetails');
    const storedChatStarted = localStorage.getItem('isChatStarted');

    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
    if (storedChatStarted) {
      setIsChatStarted(JSON.parse(storedChatStarted));
    }

    if (storedUserDetails) {
      const userEmail = JSON.parse(storedUserDetails).email;
      const chatRef = doc(db, 'chats', userEmail);

      // Listen to unreadCount changes in the chat document
      const unsubscribe = onSnapshot(chatRef, (snapshot) => {
        if (snapshot.exists()) {
          const chatData = snapshot.data();
          setUnreadCount(chatData.unreadCount || 0);
        }
      });

      return () => unsubscribe();
    }
  }, []);

  // Reset unread count when chat is opened
  useEffect(() => {
    if (isOpen && userDetails.email) {
      const chatRef = doc(db, 'chats', userDetails.email);
      updateDoc(chatRef, {
        unreadCount: 0
      }).catch(error => console.error("Error resetting unread count:", error));
    }
  }, [isOpen, userDetails.email]);

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
      {/* Floating Button */}
      <button 
        onClick={toggleChat}
        className="fixed bottom-6 right-6 p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
      >
        <MessageCircle size={24} />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-medium">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 w-[340px] h-[500px] bg-white rounded-xl shadow-2xl z-50 flex flex-col overflow-hidden transition-all duration-300 ease-out
          ${isOpen 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        {/* Header */}
        <div className="bg-blue-600 p-4 text-white">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-xl mb-3">
                C
              </div>
              <h3 className="font-semibold text-lg mb-1">Customer Care</h3>
              <p className="text-sm text-blue-100">
                Chat with our customer care representatives for quick responses
              </p>
            </div>
            <button 
              onClick={toggleChat}
              className="p-1.5 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Chat Content */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          {!isChatStarted ? (
            <form onSubmit={startChat} className="p-6 space-y-4">
              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={userDetails.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  value={userDetails.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                />
                <textarea
                  name="firstMessage"
                  value={userDetails.firstMessage}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
              >
                Start Chat
              </button>
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