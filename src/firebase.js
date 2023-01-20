import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKD90X-KZDR-V-0WBO_vyXuv7IfFSmsj4",
  authDomain: "twitter-clone-app-7495b.firebaseapp.com",
  projectId: "twitter-clone-app-7495b",
  storageBucket: "twitter-clone-app-7495b.appspot.com",
  messagingSenderId: "801419367491",
  appId: "1:801419367491:web:d5d1df2d8e302ad07c30f6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db