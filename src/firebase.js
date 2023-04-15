import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyALKxEmisoH8GK8elWHvE2UCfLVnv4HUTM",
    authDomain: "easo-venture.firebaseapp.com",
    projectId: "easo-venture",
    storageBucket: "easo-venture.appspot.com",
    messagingSenderId: "836870462195",
    appId: "1:836870462195:web:50e211b72aca7eb0b1f586"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) ; 