// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2RZ_hXJPN0OqQA96gpXqxn6T_YtTeIOM",
  authDomain: "wheres-waldo-862e6.firebaseapp.com",
  projectId: "wheres-waldo-862e6",
  storageBucket: "wheres-waldo-862e6.appspot.com",
  messagingSenderId: "450818872551",
  appId: "1:450818872551:web:5270b06048c44e3a0e3e42",
  measurementId: "G-CQ2RQG9LPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);

