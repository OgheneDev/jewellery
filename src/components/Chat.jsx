import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, query, orderBy, onSnapshot, doc, setDoc, serverTimestamp, runTransaction, increment } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';

const Chat = ({ userDetails }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for skeletons
  const chatId = userDetails.email;

  useEffect(() => {
    const initializeChat = async () => {
      try {
        const chatRef = doc(db, 'chats', chatId);
        const messagesRef = collection(chatRef, 'messages');

        await runTransaction(db, async (transaction) => {
          const chatDoc = await transaction.get(chatRef);

          if (!chatDoc.exists()) {
            transaction.set(chatRef, {
              userId: userDetails.email,
              userName: userDetails.name,
              lastUpdated: serverTimestamp(),
              initialMessagesSent: false,
              unreadCount: 0, // Initialize unread count
            });
          }

          const existingChat = chatDoc.data();

          if (!existingChat || !existingChat.initialMessagesSent) {
            if (userDetails.firstMessage) {
              transaction.set(doc(messagesRef), {
                text: userDetails.firstMessage,
                sender: userDetails.name,
                timestamp: serverTimestamp(),
                isInitialMessage: true
              });
            }

            transaction.set(doc(messagesRef), {
              text: "Hello, how can I help you today?",
              sender: "Admin",
              timestamp: serverTimestamp(),
              isInitialMessage: true
            });

            transaction.update(chatRef, { initialMessagesSent: true });
          }
        });

        const q = query(messagesRef, orderBy("timestamp", "asc"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
          const fetchedMessages = snapshot.docs.map((doc) => doc.data());
          setMessages(fetchedMessages);
          setLoading(false); // Disable loading state once data is fetched
        });

        return unsubscribe;
      } catch (error) {
        console.error("Error initializing chat:", error);
        setLoading(false); // Disable loading state in case of error
      }
    };

    const unsubscribe = initializeChat();
    return () => {
      if (unsubscribe && typeof unsubscribe === 'function') {
        unsubscribe();
      }
    };
  }, [chatId, userDetails]);

  const sendMessage = async (e) => {
    e.preventDefault();
  
    if (message.trim()) {
      const messageData = {
        text: message,
        sender: userDetails.name,
        timestamp: serverTimestamp(),
      };
  
      try {
        await addDoc(collection(db, 'chats', chatId, 'messages'), messageData);
  
        // Increment unread count for admin
        await setDoc(doc(db, 'chats', chatId), {
          lastUpdated: serverTimestamp(),
          unreadCount: increment(1)
        }, { merge: true });
  
        // Send email
        await sendEmail(messageData);
  
        setMessage('');
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  const sendEmail = async (messageData) => {
    try {
      await emailjs.send(
        'service_u0zwyvr',
        'template_6hnubrk',
        {
          from_email: userDetails.email,
          subject: `New message from ${userDetails.name}`,
          from_name: userDetails.name,
          message: messageData.text,
        },
        'onwdvPqDL6qqR0QpZ'
      );
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  const formatTimestamp = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate();
    return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }).toLowerCase();
  };

  return (
    <div className="flex flex-col h-full border border-gray-200 overflow-hidden bg-white font-sans">
      <div className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-4">
        {loading ? (
          // Skeleton loading indicators
          Array(5).fill('').map((_, index) => (
            <div key={index} className="flex flex-col space-y-1 animate-pulse">
              <div className="bg-gray-300 rounded-lg p-3 max-w-[70%]"></div>
              <div className="bg-gray-200 rounded-lg p-2 max-w-[50%] h-4"></div>
            </div>
          ))
        ) : (
          // Render messages once loading is complete
          messages.map((msg, index) => (
            <div key={index} className="flex flex-col space-y-1">
              {msg.sender !== userDetails.name && (
                <span className="text-sm font-semibold text-gray-700">
                  {msg.sender}
                </span>
              )}
              <div className={`flex flex-col ${msg.sender === userDetails.name ? 'items-end' : 'items-start'}`}>
                <div
                  className={`max-w-[70%] p-3 rounded-2xl shadow-sm ${
                    msg.sender === userDetails.name
                      ? 'bg-blue-600 text-white rounded-tr-none ml-auto'
                      : 'bg-gray-200 text-gray-800 rounded-tl-none'
                  } text-sm leading-relaxed`}
                >
                  {msg.text}
                </div>
                <span
                  className={`text-xs text-gray-500 mt-1 ${
                    msg.sender === userDetails.name ? 'text-right' : 'text-left'
                  }`}
                >
                  {formatTimestamp(msg.timestamp)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={sendMessage} className="sticky bottom-0 p-4 bg-gray-100 border-t border-gray-200">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
          />
          <button
            type="submit"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
