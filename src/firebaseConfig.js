import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBQsB_reZLJXBdISt2GkEFRShyJIRAQz7Y",
  authDomain: "valence-am.firebaseapp.com",
  projectId: "valence-am",
  storageBucket: "valence-am.appspot.com",
  messagingSenderId: "638008820651",
  appId: "1:638008820651:web:70695a27fd8920804a48ee",
  measurementId: "G-MFDKZFRF77"
};

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)

  export const db = getFirestore(app)




   