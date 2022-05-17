// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDToUbSUQg-UVl9EOxh5ct3pye8lbIut-o",
  authDomain: "twitter-clone-bacc1.firebaseapp.com",
  projectId: "twitter-clone-bacc1",
  storageBucket: "twitter-clone-bacc1.appspot.com",
  messagingSenderId: "80764685892",
  appId: "1:80764685892:web:5652204a3213d3784af611",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
