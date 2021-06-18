    import firebase from 'firebase';
    
      const  firebaseConfig = {
        apiKey: "AIzaSyDQR6HhUxt6TDIfIWkmpOB4Ht_jZAMN3Fk",
        authDomain: "skillbuilder-bc27c.firebaseapp.com",
        projectId: "skillbuilder-bc27c",
        messagingSenderId: "573929503635",
        appId: "1:573929503635:web:f88630acbcbbc4df298666",
      };
      // Initialize Firebase
      const firebaseApp = firebase.initializeApp(firebaseConfig);
      const auth = firebase.auth();
      //const provider = new firebase.auth.GoogleAuthProvider();
      const db = firebase.firestore();
      
      export { auth, db }


