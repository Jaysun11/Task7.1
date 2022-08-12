
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZjScm7arWwjXttP5KehSFjbrhZz4M6r8",
  authDomain: "task71-7d3ac.firebaseapp.com",
  projectId: "task71-7d3ac",
  storageBucket: "task71-7d3ac.appspot.com",
  messagingSenderId: "495014414995",
  appId: "1:495014414995:web:431c6e287d5c2ccd23db66",
  measurementId: "G-S4RXGKS9PK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default getFirestore();