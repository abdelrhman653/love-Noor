import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_LRjJz_TDBTM-gtootmLwoxXEoiKB2j8",
  authDomain: "love-younoor.firebaseapp.com",
  projectId: "love-younoor",
  storageBucket: "love-younoor.firebasestorage.app",
  messagingSenderId: "20928952757",
  appId: "1:20928952757:web:17d1c91e5d7140259341fc"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
