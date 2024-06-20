import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAm95Cub5IVFCCkct1IjpxNrz-cNcbAwjk",
  authDomain: "learnlingo-da964.firebaseapp.com",
  databaseURL:
    "https://learnlingo-da964-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "learnlingo-da964",
  storageBucket: "learnlingo-da964.appspot.com",
  messagingSenderId: "456994211516",
  appId: "1:456994211516:web:ca3542eb065de3b13d72b9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
