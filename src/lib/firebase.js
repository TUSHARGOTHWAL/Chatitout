import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatitout-db.firebaseapp.com",
  projectId: "chatitout-db",
  storageBucket: "chatitout-db.appspot.com",
  messagingSenderId: "931639156737",
  appId: "1:931639156737:web:e93a3dbbb4eb6f09312000",
  measurementId: "G-XS7WP7MCRF"
};

 export const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()