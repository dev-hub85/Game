import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-DSoiij3rqU9qSuWqgs0hsbcwPeN7tSE",
  authDomain: "game-3d117.firebaseapp.com",
  projectId: "game-3d117",
  storageBucket: "game-3d117.firebasestorage.app",
  messagingSenderId: "218058686618",
  appId: "1:218058686618:web:1967c33b77a448c7425f23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);

export default app;
