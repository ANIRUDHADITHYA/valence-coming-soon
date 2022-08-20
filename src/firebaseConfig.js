import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA2VxbstMFGpdzdyywoLFIv1XKzvtPkrtw",
    authDomain: "testdb-74407.firebaseapp.com",
    projectId: "testdb-74407",
    storageBucket: "testdb-74407.appspot.com",
    messagingSenderId: "850042237335",
    appId: "1:850042237335:web:d1970fa1452aabd6d314d2"
};

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app)

  export const db = getFirestore(app)




   