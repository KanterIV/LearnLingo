import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAm95Cub5IVFCCkct1IjpxNrz-cNcbAwjk",
  authDomain: "learnlingo-da964.firebaseapp.com",
  projectId: "learnlingo-da964",
  storageBucket: "learnlingo-da964.appspot.com",
  messagingSenderId: "456994211516",
  appId: "1:456994211516:web:ca3542eb065de3b13d72b9",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
