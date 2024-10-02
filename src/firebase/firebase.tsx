// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "calendar-react-85cff.firebaseapp.com",
  projectId: "calendar-react-85cff",
  messagingSenderId: "966242575668",
  appId: "1:966242575668:web:4bdcf637d9b90c8f52b161",
  storageBucket: "gs://calendar-react-85cff.appspot.com",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const storage = getStorage(app);

//storage operations
export const firebaseApp = getApp();



