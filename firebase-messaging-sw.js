importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.9/firebase-messaging.js');
  firebase.initializeApp({
    apiKey: "AIzaSyCIJQh-pNWEO-Q-wH7hzWwx56QSsjGC1cU",
    authDomain: "orid-9f95b.firebaseapp.com",
    projectId: "orid-9f95b",
    storageBucket: "orid-9f95b.appspot.com",
    messagingSenderId: "521627020711",
    appId: "1:521627020711:web:e94fef929a81bdbd8d9a82",
    measurementId: "G-C8KVBC4FPN"
});
  const messaging = firebase.messaging();
//   messaging.onTokenRefresh = messaging.onTokenRefresh.bind(messaging);
//   messaging.onMessage = messaging.onMessage.bind(messaging); 