import firebase from 'firebase';
import "firebase/storage";
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDQR6HhUxt6TDIfIWkmpOB4Ht_jZAMN3Fk",
    authDomain: "skillbuilder-bc27c.firebaseapp.com",
    projectId: "skillbuilder-bc27c",
    storageBucket: "skillbuilder-bc27c.appspot.com",
    messagingSenderId: "573929503635",
    appId: "1:573929503635:web:f88630acbcbbc4df298666",
    measurementId: "G-MS3515FGC6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();