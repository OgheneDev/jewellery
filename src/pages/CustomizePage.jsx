import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import Ready from '../components/Ready';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';

const CustomizePage = ({ toggleChat, sendMessageToAdmin, userDetails }) => {
  useEffect(() => {
    // Check if the alert has been shown before using localStorage
    const alertShown = localStorage.getItem('alertShown');

    // Show alert only if the user details are incomplete and alert hasn't been shown
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
            // Close the alert and trigger chat toggle
            Swal.close();
            toggleChat();
            localStorage.setItem('alertShown', 'true'); // Mark the alert as shown
            resolve(); // Resolve the promise to continue the flow
          });
        }
      });
    }
  }, [userDetails, toggleChat]);

  return (
    <div className="pt-[100px] pb-[40px] md:px-[80px]">
      <Ready />
      <div className="md:flex md:gap-[10px] md:items-start">
        <Sidebar
          toggleChat={toggleChat}
          sendMessageToAdmin={(message) => sendMessageToAdmin(userDetails.email, message)}
        />
        <ProductList toggleChat={toggleChat} />
      </div>
    </div>
  );
};

export default CustomizePage;
