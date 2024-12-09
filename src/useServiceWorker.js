import { useEffect } from 'react';

const registerServiceWorker = async () => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('Service Worker registered successfully:', registration);
    } catch (error) {
      console.error('Service Worker registration failed:', error);
    }
  }
};

export const useServiceWorker = () => {
  useEffect(() => {
    registerServiceWorker();
  }, []);
};
