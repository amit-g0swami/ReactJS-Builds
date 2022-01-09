import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA1ywtXy6cYRqdD3Z-ltrzpYev7Cg5vF_Y",
  authDomain: "twitter-clone-dcba0.firebaseapp.com",
  projectId: "twitter-clone-dcba0",
  storageBucket: "twitter-clone-dcba0.appspot.com",
  messagingSenderId: "216388191066",
  appId: "1:216388191066:web:e0f34cdf9a84fe76eea963",
  measurementId: "G-41KCMPX9FV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
