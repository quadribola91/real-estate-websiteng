// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlJd8kJL9LpIjX6MMU8XDd7NsxtkzHvvM",
  authDomain: "rentwiteaseng-d9e7f.firebaseapp.com",
  projectId: "rentwiteaseng-d9e7f",
  storageBucket: "rentwiteaseng-d9e7f.firebasestorage.app",
  messagingSenderId: "283165532584",
  appId: "1:283165532584:web:3da64e3a286a2eb6f47d9d",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
