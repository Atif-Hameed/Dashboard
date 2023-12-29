// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp5F8Tj_yD0uIDiRg7klVGTGV98dj3-KA",
  authDomain: "dashboard-store-54095.firebaseapp.com",
  projectId: "dashboard-store-54095",
  databaseURL:"https://dashboard-store-54095-default-rtdb.firebaseio.com/",
  storageBucket: "dashboard-store-54095.appspot.com",
  messagingSenderId: "123556759786",
  appId: "1:123556759786:web:07f3a9493f2a086b946f93"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()