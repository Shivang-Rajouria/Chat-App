import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
 apiKey: "AIzaSyAQJH0kMCeiftZFKbv5s7TZXtqPJatqZ8g",
  authDomain: "chat-app-931c5.firebaseapp.com",
  projectId: "chat-app-931c5",
  storageBucket: "chat-app-931c5.appspot.com",
  messagingSenderId: "37386125547",
  appId: "1:37386125547:web:9ca0980ce1687c1421beae",
  measurementId: "G-WQ0KZDMKR8"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
