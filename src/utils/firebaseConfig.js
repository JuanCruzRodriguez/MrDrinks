// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh8xNycLnZVZIQ1yNINAatBzo3VQTPAxI",
    authDomain: "mr-drinks-37133.firebaseapp.com",
    projectId: "mr-drinks-37133",
    storageBucket: "mr-drinks-37133.appspot.com",
    messagingSenderId: "332375818448",
    appId: "1:332375818448:web:367d321b24b62c58449ed5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;