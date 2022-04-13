// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqEisbLF9oZzt32ZJAk4hDpgbu9frB4w",
  authDomain: "ema-john-simple-b4da2.firebaseapp.com",
  projectId: "ema-john-simple-b4da2",
  storageBucket: "ema-john-simple-b4da2.appspot.com",
  messagingSenderId: "518065618907",
  appId: "1:518065618907:web:67d3426538b286816931fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;