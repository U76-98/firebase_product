import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCAD0WtMnHUUI3kw1C78SZfdrgT6t6KC9c",
  authDomain: "fir-c5b7a.firebaseapp.com",
  projectId: "fir-c5b7a",
  storageBucket: "fir-c5b7a.firebasestorage.app",
  messagingSenderId: "178244291843",
  appId: "1:178244291843:web:56d82dcdf1d1f05445ad36",
  measurementId: "G-FCLQV5NHC0"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const authFeature = getAuth(app);
export const database = getFirestore(app);
