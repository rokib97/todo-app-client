// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM5D7aaf2Fo3jonWgmZfTIM17B3wxfZgU",
  authDomain: "todo-app-e6ab9.firebaseapp.com",
  projectId: "todo-app-e6ab9",
  storageBucket: "todo-app-e6ab9.appspot.com",
  messagingSenderId: "14004319961",
  appId: "1:14004319961:web:75a16d4f81e5e004a8f0c8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
