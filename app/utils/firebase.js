import firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyAR0NfIsrqWiIh5DK6W1xfKbAL4ElP_vBc",
    authDomain: "examenu4-444b5.firebaseapp.com",
    projectId: "examenu4-444b5",
    storageBucket: "examenu4-444b5.appspot.com",
    messagingSenderId: "765246849107",
    appId: "1:765246849107:web:b4e3ac952b827b2aa046a6",
    measurementId: "G-0ZT2FJ8TRL"
};


export const firebaseapp = firebase.initializeApp(firebaseConfig);