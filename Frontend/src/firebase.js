// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAKU0hySuheYCeoyFA11Gfnt6QnzcYX9Pg",

  authDomain: "clickeazzy-5c3ea.firebaseapp.com",

  databaseURL: "https://clickeazzy-5c3ea-default-rtdb.firebaseio.com",

  projectId: "clickeazzy-5c3ea",

  storageBucket: "clickeazzy-5c3ea.appspot.com",

  messagingSenderId: "1023885463488",

  appId: "1:1023885463488:web:4f7bb2e96b3393758e0225"

};


// Initialize Firebase
export const auth = initializeApp(firebaseConfig);

export const authApp=getAuth();

