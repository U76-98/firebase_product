// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAD0WtMnHUUI3kw1C78SZfdrgT6t6KC9c",
  authDomain: "fir-c5b7a.firebaseapp.com",
  projectId: "fir-c5b7a",
  storageBucket: "fir-c5b7a.firebasestorage.app",
  messagingSenderId: "178244291843",
  appId: "1:178244291843:web:56d82dcdf1d1f05445ad36",
  measurementId: "G-FCLQV5NHC0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const authFeature = getAuth(app)
export const database = getFirestore(app)