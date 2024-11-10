import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD4LPENSqGJO3tGNcqeMKNtPJBrfIwRfng",
    authDomain: "netflix-clone-9d395.firebaseapp.com",
    projectId: "netflix-clone-9d395",
    storageBucket: "netflix-clone-9d395.firebasestorage.app",
    messagingSenderId: "346985327584",
    appId: "1:346985327584:web:4916e9bcc5ecc720d05985"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    } catch (error) {
        console.log(error);
        alert(error);
    }
}

const login = async(email, password) => {
    try {
        
    } catch (error) {
        console.log(error);
        
    }
}