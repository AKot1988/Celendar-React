// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "calendar-react-85cff.firebaseapp.com",
  projectId: "calendar-react-85cff",
  storageBucket: "calendar-react-85cff.appspot.com",
  messagingSenderId: "966242575668",
  appId: "1:966242575668:web:4bdcf637d9b90c8f52b161"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);