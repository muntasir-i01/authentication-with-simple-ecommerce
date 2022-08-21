// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvjerWBNFTvQiDrhh8osD7MDoOeexEXe0",
  authDomain: "ema-jhon-6352f.firebaseapp.com",
  projectId: "ema-jhon-6352f",
  storageBucket: "ema-jhon-6352f.appspot.com",
  messagingSenderId: "416351097442",
  appId: "1:416351097442:web:bcc790d5c6aace8fbfb73b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;