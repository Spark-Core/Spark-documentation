importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.0.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    messagingSenderId: "463922476306"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

self.addEventListener('notificationclick', function(event) {
    return clients.openWindow('https://discordspark.com/releases')
        .then(i => {
            console.log(i)
        })
        .catch(e => {
            console.log(e)
        })
});

messaging.setBackgroundMessageHandler(function(payload) {
    var notificationTitle = payload.data.title;
    var body = payload.data.body + "\nClick for more information, \nor go to discordspark.com/releases"
    var notificationOptions = {
        body,
        icon: '/icons/Spark-icon-no-bg.png',
    };

    return self.registration.showNotification(notificationTitle,
            notificationOptions)
        .then(() => self.registration.getNotifications())
        .then(notifications => {
            setTimeout(() => notifications.forEach(notification => notification.close()), 30000);


        })
})