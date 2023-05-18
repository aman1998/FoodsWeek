// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxbncT6-vnKdbS1y-CeK91a-VZVcFq0mk",
  authDomain: "foodinfo-598dd.firebaseapp.com",
  projectId: "foodinfo-598dd",
  storageBucket: "foodinfo-598dd.appspot.com",
  messagingSenderId: "729670026395",
  appId: "1:729670026395:web:62a29f90075184ba5bf23e",
};

export const database = getFirestore(initializeApp(firebaseConfig));
export const auth = getAuth();

// export const app = initializeApp(firebaseConfig);
