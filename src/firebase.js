
import firebase from "firebase/app";
import "firebase/firestore";

  const firebaseConfig = {
    apiKey: "AIzaSyAKulW1pdulGSVBvUA8FGVvlVT6gdItvW8",
    authDomain: "grewordbook.firebaseapp.com",
    databaseURL: "https://grewordbook.firebaseio.com",
    projectId: "grewordbook",
    storageBucket: "grewordbook.appspot.com",
    messagingSenderId: "398502790314",
    appId: "1:398502790314:web:07930223822b70e8f0bcd3"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;