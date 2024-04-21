import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc-PXAushiFI0lL5imNWpRpCmKNAsVyJA",
  authDomain: "ecommercetest-d7e25.firebaseapp.com",
  projectId: "ecommercetest-d7e25",
  storageBucket: "ecommercetest-d7e25.appspot.com",
  messagingSenderId: "269400851811",
  appId: "1:269400851811:web:2f4f547c249cd4da1dbf56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app)
export {fireDB,auth } ;