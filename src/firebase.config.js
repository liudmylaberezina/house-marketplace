// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbv48oRjBvlBii045_ZFVDbwPm3IJX3eY",
  authDomain: "house-marketplace-app-26ffa.firebaseapp.com",
  projectId: "house-marketplace-app-26ffa",
  storageBucket: "house-marketplace-app-26ffa.appspot.com",
  messagingSenderId: "820608921529",
  appId: "1:820608921529:web:2c4c4894fe675480cad068",
  measurementId: "G-NFGY0VJMEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore();