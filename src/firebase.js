import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, set, get, push, remove } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCUY6G-XPy3FycHiM90_VwCnrjZSk1WaW8",
    authDomain: "reacttest-f00d2.firebaseapp.com",
    databaseURL: "https://reacttest-f00d2-default-rtdb.firebaseio.com",
    projectId: "reacttest-f00d2",
    storageBucket: "reacttest-f00d2.appspot.com",
    messagingSenderId: "253502149283",
    appId: "1:253502149283:web:a548847f4ebbdbe392e516",
    measurementId: "G-BXLM15DRBW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, database, ref, set, get, push, remove };
