
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBuxXNBQv5HgrPBr1EOlqfTGq4Oi1Qc3Xo",
    authDomain: "netflix-clone-e03c5.firebaseapp.com",
    projectId: "netflix-clone-e03c5",
    storageBucket: "netflix-clone-e03c5.appspot.com",
    messagingSenderId: "617132027779",
    appId: "1:617132027779:web:3b9ae014d092f5683690b6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth }
  export default db;

