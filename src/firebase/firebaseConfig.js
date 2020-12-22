import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAph6gP8JuYP2DsbO0zdSMUXStJhLcxDBg",
    authDomain: "fir-demo-proyect.firebaseapp.com",
    projectId: "fir-demo-proyect",
    storageBucket: "fir-demo-proyect.appspot.com",
    messagingSenderId: "958565096539",
    appId: "1:958565096539:web:e7758b167cc4bee601337e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db =firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export{
      db,
      googleAuthProvider,
      firebase
  }