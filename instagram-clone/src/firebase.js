import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBhx7ZD_Xr-kb8O3m-AiI_AK4TocSPnPfg",
  authDomain: "instagram-clone-1ed89.firebaseapp.com",
  projectId: "instagram-clone-1ed89",
  storageBucket: "instagram-clone-1ed89.appspot.com",
  messagingSenderId: "21787837933",
  appId: "1:21787837933:web:6db5c0371ab0f515e593e4",
  measurementId: "G-2P6DXVW73M",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
