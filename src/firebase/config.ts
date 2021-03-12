import firebase from "firebase/app";
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD8pV4muBdZESkZoKwmYFHmwBhAOerqfjA",
    authDomain: "school-works-1517.firebaseapp.com",
    databaseURL: "https://school-works-1517-default-rtdb.firebaseio.com",
    projectId: "school-works-1517",
    storageBucket: "school-works-1517.appspot.com",
    messagingSenderId: "29409911610",
    appId: "1:29409911610:web:c27544bd87813d51946603",
    measurementId: "G-Z6VT6KQ9RE"
};


firebase.initializeApp(firebaseConfig);
console.log('firebase configurado')

export default firebase.firestore();
