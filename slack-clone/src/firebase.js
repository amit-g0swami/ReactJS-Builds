import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBOHGXfc8KCiic8QuSLlxVIsl1OgOSSoQA",
  authDomain: "slack-clone-eb619.firebaseapp.com",
  projectId: "slack-clone-eb619",
  storageBucket: "slack-clone-eb619.appspot.com",
  messagingSenderId: "331026583255",
  appId: "1:331026583255:web:ad4339cbad364de0d36a92",
  measurementId: "G-ERNCK1CHS7"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;