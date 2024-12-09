import React from 'react';
import { useServiceWorker } from '../hooks/useServiceWorker';

const PushNotificationDemo = () => {
  useServiceWorker();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Push Notification Demo</h1>
      <p>The service worker has been registered. Trigger notifications via your app logic.</p>
    </div>
  );
};

export default PushNotificationDemo;
