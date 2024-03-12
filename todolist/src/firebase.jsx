// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDORQbKbKHeQ3tsvEZLHTjcSfz1ZXyg6RI",
    authDomain: "todo-list-5e206.firebaseapp.com",
    projectId: "todo-list-5e206",
    storageBucket: "todo-list-5e206.appspot.com",
    messagingSenderId: "517752202427",
    appId: "1:517752202427:web:cb8b539207ddc09e13b59e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);