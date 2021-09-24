import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALOTDLc9qY4TGlgrHHMHf-tLTSnjefsk8",
    authDomain: "clone-app-da065.firebaseapp.com",
    projectId: "clone-app-da065",
    storageBucket: "clone-app-da065.appspot.com",
    messagingSenderId: "331855031792",
    appId: "1:331855031792:web:a65b74c15808e8cbd70135",
    measurementId: "G-DSD901Z89L"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export { db, auth };