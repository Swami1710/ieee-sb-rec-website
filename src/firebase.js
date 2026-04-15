import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA9btLI4L9PqlmvyHRTK2aFZw9AoBh5Ivk",
  authDomain: "ieee-website-db8cb.firebaseapp.com",
  projectId: "ieee-website-db8cb",
  storageBucket: "ieee-website-db8cb.firebasestorage.app",
  messagingSenderId: "37756231365",
  appId: "1:37756231365:web:fcd5e20aef64980351daac",
  measurementId: "G-7DZQLFFRD2"
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)