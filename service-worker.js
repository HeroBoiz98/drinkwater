self.addEventListener('push', function(event) {
    const options = {
        body: event.data.text(),
        icon: 'notification-icon.png',
        badge: 'notification-badge.png'
    };

    event.waitUntil(
        self.registration.showNotification('Timer Notification', options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();

    // Add your custom behavior here when the notification is clicked
});
