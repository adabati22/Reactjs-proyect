// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{ getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_weOl15i3GwPPY6ZvV2rasc-hQ9moSQ",
  authDomain: "ecommerce-46561.firebaseapp.com",
  projectId: "ecommerce-46561",
  storageBucket: "ecommerce-46561.firebasestorage.app",
  messagingSenderId: "1081315192330",
  appId: "1:1081315192330:web:df0c3a7435fc7e630779f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);