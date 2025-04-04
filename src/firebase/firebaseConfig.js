// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlHctR5Qclx0leALs2QkE6Rwt3ud5WkUQ",
  authDomain: "test2-ba4ea.firebaseapp.com",
  projectId: "test2-ba4ea",
  storageBucket: "test2-ba4ea.firebasestorage.app",
  messagingSenderId: "7587953417",
  appId: "1:7587953417:web:7a99b8725232a7f11eb1d8",
  measurementId: "G-R2TGBR513B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);