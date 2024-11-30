// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

  const firebaseConfig = {
    apiKey: "AIzaSyDnWq6mQdgHIYr0el0gwAEkgbeei2Y8c3w",
    authDomain: "coffee-shop-9e0b1.firebaseapp.com",
    projectId: "coffee-shop-9e0b1",
    storageBucket: "coffee-shop-9e0b1.firebasestorage.app",
    messagingSenderId: "33847546383",
    appId: "1:33847546383:web:4a5e11dc2460c06d06897a"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)