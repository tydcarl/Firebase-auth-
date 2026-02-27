// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from  "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxO7wRD3vR_cOvD2qpxrWQ4QtkzGLyl_c",
  authDomain: "fir-practice-ca8e3.firebaseapp.com",
  projectId: "fir-practice-ca8e3",
  storageBucket: "fir-practice-ca8e3.firebasestorage.app",
  messagingSenderId: "400663004801",
  appId: "1:400663004801:web:8eae2957ecf3bc8924ef80",
  measurementId: "G-YFXZ0GD847",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getAuth();
