import firebase from "firebase";
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyDPo48N8rWwSP6g1FqRXOeOWSLqXbBfdJE",
    authDomain: "nados-clone.firebaseapp.com",
    projectId: "nados-clone",
    storageBucket: "nados-clone.appspot.com",
    messagingSenderId: "281188089209",
    appId: "1:281188089209:web:ef8367dce3319112dc43a8",
    measurementId: "G-MYQ71LBFJD"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };