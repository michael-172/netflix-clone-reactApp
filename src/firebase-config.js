// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1FqczcI6AmvTTR6hnFGQwIutAtajSnNo",
  authDomain: "my-first-app-f3a6d.firebaseapp.com",
  projectId: "my-first-app-f3a6d",
  storageBucket: "my-first-app-f3a6d.appspot.com",
  messagingSenderId: "131804153766",
  appId: "1:131804153766:web:1c77dfe2b4d742b64eb167",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
