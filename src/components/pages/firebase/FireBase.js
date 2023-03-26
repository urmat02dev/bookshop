// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUlwnHMN7dr-kZR1JC-5EC3TZP9kJL_oI",
  authDomain: "bookshop-3f82f.firebaseapp.com",
  projectId: "bookshop-3f82f",
  storageBucket: "bookshop-3f82f.appspot.com",
  messagingSenderId: "595130251920",
  appId: "1:595130251920:web:b7a76601812d131493b615",
  measurementId: "G-MVS3TV6D86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);