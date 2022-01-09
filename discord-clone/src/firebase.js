import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA_Vp086Thsv7K2DZVs8UFMzTbTegwAD0",
  authDomain: "discord-clone-9def6.firebaseapp.com",
  projectId: "discord-clone-9def6",
  storageBucket: "discord-clone-9def6.appspot.com",
  messagingSenderId: "416413966514",
  appId: "1:416413966514:web:336dceec844408a3c329ab",
  measurementId: "G-68E8X4WFNZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
