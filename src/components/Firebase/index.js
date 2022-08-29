// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcnupo-8qqFHBd3PHKO-_f0Dj5Cj2MWuE",
  authDomain: "dating-app-mern-6ceda.firebaseapp.com",
  projectId: "dating-app-mern-6ceda",
  storageBucket: "dating-app-mern-6ceda.appspot.com",
  messagingSenderId: "87119221672",
  appId: "1:87119221672:web:a6c753a4766773afc3439d",
  measurementId: "G-66VV82NSH5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);