// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAbPaAqhv9eQ22U3Fs8OTsjOOB5DjuZTL8",
    authDomain: "web-projectone.firebaseapp.com",
    projectId: "web-projectone",
    storageBucket: "web-projectone.appspot.com",
    messagingSenderId: "10680481909",
    appId: "1:10680481909:web:6df9907a9ff980bf62a03c",
    measurementId: "G-JLMMNWJ6JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// create
