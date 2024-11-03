import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import FloatingChat from './components/FloatingChat';
import CustomizePage from './pages/CustomizePage';

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Move the router configuration inside the App component
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage toggleChat={toggleChat} />} />
        <Route path='/about-us' element={<AboutUsPage toggleChat={toggleChat} />} />
        <Route path='/make-enquiries' element={<CustomizePage toggleChat={toggleChat} />} />
      </Route>
    )
  );

  return (
    <>
      {/* Render the FloatingChat outside the RouterProvider to make it persist */}
      <RouterProvider router={router} />

      {/* FloatingChat component to be accessible across routes */}
      <FloatingChat isOpen={isChatOpen} toggleChat={toggleChat} />
    </>
  );
};

export default App;



