import  firebase  from "firebase/compat/app";
// //auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcQKDgn7L42TpwfSgL8AgEqQzQwBd8PDI",
  authDomain: "clone-b6fd4.firebaseapp.com",
  projectId: "clone-b6fd4",
  storageBucket: "clone-b6fd4.appspot.com",
  messagingSenderId: "551430163994",
  appId: "1:551430163994:web:6abf34e1f8dffe20c14ba3",
};

// // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();



