// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBPQINaN8799NFOLpmCv8IsAq-Vc91AIA0",
  authDomain: "react-37034.firebaseapp.com",
  projectId: "react-37034",
  storageBucket: "react-37034.appspot.com",
  messagingSenderId: "275160961744",
  appId: "1:275160961744:web:42733ab3ea10435fb004d5",
  measurementId: "G-Z44EB07WF0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const auth = getAuth()

export const  googleauth = () => {
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}

export const SignOut = () => {
    return auth.signOut()
}