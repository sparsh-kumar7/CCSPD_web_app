import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBV3-6VhP-oJa753JUun8IaKfrxOi-Vfio",
    authDomain: "login-404906.firebaseapp.com",
    projectId: "login-404906",
    storageBucket: "login-404906.appspot.com",
    messagingSenderId: "844982732651",
    appId: "1:844982732651:web:602e3e93611b17fa5cae2e",
    measurementId: "G-HXGSG1MRT8"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth, provider};
