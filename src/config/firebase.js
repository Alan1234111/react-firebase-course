import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA-ttqmyT6RTj-hLlVzeTIokIglbFbm6wI",
  authDomain: "fir-course-2bc81.firebaseapp.com",
  projectId: "fir-course-2bc81",
  storageBucket: "fir-course-2bc81.appspot.com",
  messagingSenderId: "379455801593",
  appId: "1:379455801593:web:249e54c6b3d1d5d5d6ba28",
  measurementId: "G-1GG5FVLGT8",
};

const app = initializeApp(firebaseConfig);
// Auth
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Firestore
export const db = getFirestore(app);

// storage
export const storage = getStorage(app);
