// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGJ3gwEdaYZqgOyOXJ4MF9yMUkWhnTQF0",
  authDomain: "second-dragon-news.firebaseapp.com",
  projectId: "second-dragon-news",
  storageBucket: "second-dragon-news.firebasestorage.app",
  messagingSenderId: "376174090795",
  appId: "1:376174090795:web:0dbb6589b9fff9492f286e"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;