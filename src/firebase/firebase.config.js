// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFQUH7Cabr28uWJIb0sgdVw-C83QOy6T0",
  authDomain: "assignment-10-a925e.firebaseapp.com",
  projectId: "assignment-10-a925e",
  storageBucket: "assignment-10-a925e.appspot.com",
  messagingSenderId: "598224086821",
  appId: "1:598224086821:web:62b927a33c5a5cb1319ccc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;