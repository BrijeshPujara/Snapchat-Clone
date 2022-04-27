import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCujXdPKxwUuk2YIeHLD8vUXnfbQJkxlvU",
  authDomain: "snapchat-clone-dad9e.firebaseapp.com",
  projectId: "snapchat-clone-dad9e",
  storageBucket: "snapchat-clone-dad9e.appspot.com",
  messagingSenderId: "463724307529",
  appId: "1:463724307529:web:8b8c589ba8dc03879a8b98",
  measurementId: "G-X5KHBPML68",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
