import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-storage.js";
const firebaseConfig = {
  apiKey: "AIzaSyAOgjeOLyvFi0k9cdl6CC1hb30L1CHVByw",
  authDomain: "blog-beb67.firebaseapp.com",
  projectId: "blog-beb67",
  storageBucket: "blog-beb67.appspot.com",
  messagingSenderId: "921095025882",
  appId: "1:921095025882:web:71281452c89ba3a116a1e3",
  measurementId: "G-K1YGMRQP2B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

const analytics = getAnalytics(app);

export {
  auth,
  db,
  storage,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  ref,
  uploadBytes,
  getDownloadURL,
  signOut,
  getDoc,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  arrayUnion,
  arrayRemove,
  query,
  where,
  deleteDoc,
};
