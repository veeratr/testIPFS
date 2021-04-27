// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCU4w6vT1CkAGmEBr1AeStocoRP4Gntew8",
    authDomain: "disneyplus-clone-india.firebaseapp.com",
    projectId: "disneyplus-clone-india",
    storageBucket: "disneyplus-clone-india.appspot.com",
    messagingSenderId: "792200864856",
    appId: "1:792200864856:web:d52b052d28d35082b3d62d",
    measurementId: "G-Y8405P4DM0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage}

export default db;