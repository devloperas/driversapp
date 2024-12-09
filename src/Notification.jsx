import React, { useEffect, useState } from 'react';

const PushNotificationDemo = () => {
  const [notificationSupported, setNotificationSupported] = useState(false);

  useEffect(() => {
    // Check if browser supports notifications
    if ('Notification' in window) {
      setNotificationSupported(true);
    }
  }, []);

  const requestNotificationPermission = async () => {
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return;
    }

    // Request permission
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      alert('Notification permission granted!');
    }
  };

  const triggerNotification = () => {
    // Check if notifications are supported and permission is granted
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
      return;
    }

    // Check permission
    if (Notification.permission === 'granted') {
      // Create a new notification
      new Notification('Hey there!', {
        body: 'This is a local push notification',
        icon: '/logo192.png', // Make sure to have an icon in your public folder
        badge: '/logo192.png' // Optional: small monochrome icon
      });
    } else if (Notification.permission !== 'denied') {
      // Request permission if not already granted
      requestNotificationPermission();
    }
  };

  const registerServiceWorker = async () => {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('/service-worker.js');
        console.log('Service Worker registered successfully.');
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  };

  useEffect(() => {
    registerServiceWorker();
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh' 
    }}>
      {notificationSupported ? (
        <>
          <button 
            onClick={requestNotificationPermission}
            style={{
              marginBottom: '20px',
              padding: '10px 20px',
              fontSize: '16px'
            }}
          >
            Request Notification Permission
          </button>
          <button 
            onClick={triggerNotification}
            style={{
              padding: '10px 20px',
              fontSize: '16px'
            }}
          >
            Trigger Notification
          </button>
        </>
      ) : (
        <p>Notifications are not supported in this browser</p>
      )}
    </div>
  );
};

export default PushNotificationDemo;