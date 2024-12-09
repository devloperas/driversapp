/* eslint-disable no-restricted-globals */
self.addEventListener('push', (event) => {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Default Notification Title';
    const options = {
      body: data.body || 'Default notification body',
      icon: '/logo192.png',
      badge: '/logo192.png',
    };
  
    event.waitUntil(self.registration.showNotification(title, options));
  });
  