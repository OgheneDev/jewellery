import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import Ready from '../components/Ready';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

const CustomizePage = ({ openChat, toggleChat, sendMessageToAdmin, userDetails }) => {
  useEffect(() => {
    const alertShown = localStorage.getItem('alertShown');

    if ((!userDetails.name || !userDetails.email) && !alertShown) {
      Swal.fire({
        title: 'Please Fill In Your Details',
        text: 'Before customizing your order, we need some information from you. Please fill in your details in the chat box to proceed.',
        icon: 'info',
        confirmButtonText: 'OK',
        confirmButtonColor: '#3085d6',
        allowOutsideClick: false,
        preConfirm: () => {
          return new Promise((resolve) => {
            Swal.close();
            openChat(); // Use openChat instead of toggleChat
            localStorage.setItem('alertShown', 'true');
            resolve();
          });
        }
      });
    }
  }, [userDetails, openChat]);

  return (
    <div className="pt-[100px] pb-[40px] md:px-[80px]">
      <Ready />
      <div className="md:flex md:gap-[10px] md:items-start">
        <Sidebar
          openChat={openChat} // Pass openChat instead of toggleChat
          sendMessageToAdmin={(message) => sendMessageToAdmin(userDetails.email, message)}
        />
        <ProductList toggleChat={toggleChat} />
      </div>
    </div>
  );
};

export default CustomizePage;
