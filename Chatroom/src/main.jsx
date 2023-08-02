import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzFVcpQH8H20XxoufLcHYGkCpKE687nhs",
  authDomain: "react-chat-app-3c50b.firebaseapp.com",
  databaseURL: "https://react-chat-app-3c50b-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-3c50b",
  storageBucket: "react-chat-app-3c50b.appspot.com",
  messagingSenderId: "787603999005",
  appId: "1:787603999005:web:9042e4dbe2d454c661f9f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
