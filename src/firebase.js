// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNJxQUAEWvDMN35tBrq-RntD-ydfcBZfM",
  authDomain: "twitter-app-simulation.firebaseapp.com",
  projectId: "twitter-app-simulation",
  storageBucket: "twitter-app-simulation.firebasestorage.app",
  messagingSenderId: "503713572966",
  appId: "1:503713572966:web:f5207a859db644e03325a7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);