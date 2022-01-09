import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCzFfqbCTbTLbnIh9aeqptqQWLjOv1tVQI",
  authDomain: "igreels-ff699.firebaseapp.com",
  projectId: "igreels-ff699",
  storageBucket: "igreels-ff699.appspot.com",
  messagingSenderId: "89310730207",
  appId: "1:89310730207:web:3e0d30896f8876abe0d66a",
  measurementId: "G-Y8E53CWNX4",
});

const db = firebaseApp.firestore();

export default db;
