import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCdAjsF3tyX9kkQes68XTu8HJKcnpRyDPQ",
  authDomain: "tiktok-clone-aba64.firebaseapp.com",
  projectId: "tiktok-clone-aba64",
  storageBucket: "tiktok-clone-aba64.appspot.com",
  messagingSenderId: "961771279040",
  appId: "1:961771279040:web:5133f90d43e167e7d39325",
  measurementId: "G-0B746WND81",
});

const db = firebaseApp.firestore();

export default db;
