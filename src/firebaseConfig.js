// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDM9Nq1SDLV0tjXPMbPWDCPPlHO-tjyX0",
  authDomain: "coven-alpha.firebaseapp.com",
  projectId: "coven-alpha",
  storageBucket: "coven-alpha.appspot.com",
  messagingSenderId: "870842370095",
  appId: "1:870842370095:web:d247e784ba2066219ededa",
  measurementId: "G-HP9MH44H8M",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
