// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import  Constants  from "expo-constants";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: Constants.manifest?.firebase.apiKey,
  authDomain: Constants.manifest?.firebase.authDomain,
  projectId: Constants.manifest?.firebase.projectId,
  storageBucket: Constants.manifest?.firebase.storageBucket,
  messagingSenderId: Constants.manifest?.firebase.messagingSenderId,
  appId: Constants.manifest?.firebase.appId,
  measurementId: Constants.manifest?.firebase.measurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);