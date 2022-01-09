var firebaseConfig = {
    apiKey: "AIzaSyBA04-T4AP4VHPvz931W9uicrhtFPi-g3M",
    authDomain: "clone-445da.firebaseapp.com",
    projectId: "clone-445da",
    storageBucket: "clone-445da.appspot.com",
    messagingSenderId: "46512503693",
    appId: "1:46512503693:web:d2e837b6e5854ec3a95bc4",
    measurementId: "G-J1NSB3012K"
  };

 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

var db = firebase.firestore();