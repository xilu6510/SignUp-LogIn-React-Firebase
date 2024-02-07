// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADA4SxoqmoXRCwCqeMV-TFKhf6DnHtW68",
  authDomain: "signupapp-99127.firebaseapp.com",
  projectId: "signupapp-99127",
  storageBucket: "signupapp-99127.appspot.com",
  messagingSenderId: "397652960422",
  appId: "1:397652960422:web:c1a664dff1185862370067",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getAuth(app);
