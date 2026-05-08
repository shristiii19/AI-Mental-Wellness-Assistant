import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCkiTprYYBCwQ7y8vnGgl60r0erryJJLAk",
  authDomain: "mental-wellness-ai-fccc0.firebaseapp.com",
  projectId: "mental-wellness-ai-fccc0",
  storageBucket: "mental-wellness-ai-fccc0.firebasestorage.app",
  messagingSenderId: "636851553423",
  appId: "1:636851553423:web:d445ed08813e0699e39cfa",
  measurementId: "G-FXT5KV4T8T"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);