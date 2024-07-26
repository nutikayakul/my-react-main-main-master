import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMLl9S6DYpJuO2AL0XzKQJB4-cQHtAoe4",
  authDomain: "react-project-763ba.firebaseapp.com",
  projectId: "react-project-763ba",
  storageBucket: "react-project-763ba.appspot.com",
  messagingSenderId: "287212793928",
  appId: "1:287212793928:web:481c5abfe4487bef9b287d",
  measurementId: "G-EJMFXF4GK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
const signInWithFacebook = () => signInWithPopup(auth, facebookProvider);

export { auth, signInWithGoogle, signInWithFacebook };
