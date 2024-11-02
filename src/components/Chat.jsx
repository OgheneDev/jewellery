import React, { useState, useEffect } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc, query, orderBy, onSnapshot, doc, setDoc, serverTimestamp, runTransaction, increment } from 'firebase/firestore';
import emailjs from 'emailjs-com';
import send from '../assets/images/send.svg';

const Chat = ({ userDetails }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
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
        });

        return unsubscribe;
      } catch (error) {
        console.error("Error initializing chat:", error);
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
      'service_4hprqpn',
      'template_h1e5q9n',
      {
        from_email: userDetails.email,  // Reply to
        subject: `New message from ${userDetails.name}`,
        from_name: userDetails.name,
        message: messageData.text,
      },
      '7qAJh4nn_NRkdcbVm'
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
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className="message-wrapper">
            <div className="message-sender">
              {msg.sender !== userDetails.name && <strong>{msg.sender} </strong>}
            </div>
            <div className={`message ${msg.sender === userDetails.name ? 'my-message' : 'other-message'}`}>
              {msg.text}
            </div>
            <div className="message-timestamp">
              {formatTimestamp(msg.timestamp)}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="input-box"
        />
        <div className="buttons">
          <button type="submit" className="send-btn">
            <img src={send} alt="Send" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;