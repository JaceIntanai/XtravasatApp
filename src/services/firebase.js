import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBAxlf9Jnmse7pdl9XlPBr_FN7wayGpeZw",
  authDomain: "authen-xtra.firebaseapp.com",
  databaseURL: "https://authen-xtra.firebaseio.com",
  projectId: "authen-xtra",
  storageBucket: "authen-xtra.appspot.com",
  messagingSenderId: "672394962814",
  appId: "1:672394962814:web:6e75c453d5cee059baf52f"
}

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


const auth = firebase.auth();
const db = firebase.database();

export { auth, db }