// Import the functions you need from the SDKs you need
import firebase from 'firebase'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyA3HkLRb1bYBHbK2mruYPi7AC9Hull2_EU",
  authDomain: "tejhub-142ed.firebaseapp.com",
  databaseURL: "https://tejhub-142ed-default-rtdb.firebaseio.com",
  projectId: "tejhub-142ed",
  storageBucket: "tejhub-142ed.appspot.com",
  messagingSenderId: "824336354966",
  appId: "1:824336354966:web:9023f1ab7dd58c55003cb7",
  measurementId: "G-FGYK6PJ7JK"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;