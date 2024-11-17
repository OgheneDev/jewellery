import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FloatingChat from './components/FloatingChat';
import CustomizePage from './pages/CustomizePage';
import { db } from './firebaseConfig';
import { addDoc, collection, serverTimestamp, setDoc, doc } from 'firebase/firestore';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(() => {
    const stored = localStorage.getItem('userDetails');
    return stored ? JSON.parse(stored) : { name: '', email: '', firstMessage: '' };
  });

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleUserDetailsUpdate = (newUserDetails) => {
    setUserDetails(newUserDetails);
    localStorage.setItem('userDetails', JSON.stringify(newUserDetails));
  };

  const sendMessageToAdmin = async (chatId, message) => {
    try {
      await addDoc(collection(db, 'chats', chatId, 'messages'), {
        text: message,
        sender: userDetails.name || 'User',
        timestamp: serverTimestamp(),
      });
  
      await setDoc(
        doc(db, 'chats', chatId),
        {
          lastUpdated: serverTimestamp(),
        },
        { merge: true }
      );
  
      console.log(`Message sent to chatId: ${chatId}`, message);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout toggleChat={toggleChat} />}>
        <Route index element={<HomePage toggleChat={toggleChat} />} />
        <Route path="/about-us" element={<AboutUsPage toggleChat={toggleChat} />} />
        <Route
          path="/make-enquiries"
          element={
            <CustomizePage
              toggleChat={toggleChat}
              sendMessageToAdmin={sendMessageToAdmin}
              userDetails={userDetails}
            />
          }
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <FloatingChat 
        isOpen={isChatOpen} 
        toggleChat={toggleChat}
        userDetails={userDetails}
        onUserDetailsUpdate={handleUserDetailsUpdate}
      />
    </>
  );
};

export default App;