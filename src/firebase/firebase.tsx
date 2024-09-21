// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "calendar-react-85cff.firebaseapp.com",
  projectId: "calendar-react-85cff",
  storageBucket: "calendar-react-85cff.appspot.com",
  messagingSenderId: "966242575668",
  appId: "1:966242575668:web:4bdcf637d9b90c8f52b161",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);

//storage operations
export const firebaseApp = getApp();


