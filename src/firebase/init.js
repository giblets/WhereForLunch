import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB2yPONg3MDJ_igiAOESFgwfHaWfRW68Ro",
    authDomain: "whereforlunch.firebaseapp.com",
    databaseURL: "https://whereforlunch.firebaseio.com",
    projectId: "whereforlunch",
    storageBucket: "whereforlunch.appspot.com",
    messagingSenderId: "541933143892"
  };
const firebaseApp =  firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()