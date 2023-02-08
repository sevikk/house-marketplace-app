import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbpofeens3w9d-2Xi9YEmnTNrI84pOToU",
  authDomain: "house-marketplace-app-1989.firebaseapp.com",
  projectId: "house-marketplace-app-1989",
  storageBucket: "house-marketplace-app-1989.appspot.com",
  messagingSenderId: "39994756330",
  appId: "1:39994756330:web:4b5e1accc87d9d33bbdb93"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()