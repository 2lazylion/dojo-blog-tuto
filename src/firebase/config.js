import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDpvovNefURxQiuERef-hVeE2ggK27QNgY",
    authDomain: "udemy-vue-firebase-demo.firebaseapp.com",
    projectId: "udemy-vue-firebase-demo",
    storageBucket: "udemy-vue-firebase-demo.appspot.com",
    messagingSenderId: "872820764634",
    appId: "1:872820764634:web:0ac5790c6625fb5614dae3"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig)

  // init firestore service
  const projectFirestore = firebase.firestore()

  const timestamp = firebase.firestore.FieldValue.serverTimestamp

  export { projectFirestore, timestamp }