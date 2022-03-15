// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPycQDiS606YI6MsUS6oFFR1RHlPEu6ro",
  authDomain: "house-marketplace-app-7c863.firebaseapp.com",
  projectId: "house-marketplace-app-7c863",
  storageBucket: "house-marketplace-app-7c863.appspot.com",
  messagingSenderId: "139233151824",
  appId: "1:139233151824:web:9275a810609798ca777a55"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
