import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRgCJn3rOMc_ruHHx8PaMaazG_uNFF0EE",
  authDomain: "mindease-app-8f1ce.firebaseapp.com",
  projectId: "mindease-app-8f1ce",
  storageBucket: "mindease-app-8f1ce.firebasestorage.app",
  messagingSenderId: "109095789630",
  appId: "1:109095789630:web:f6217127abc8cc6f301d6f",
  measurementId: "G-R268XRWE6M",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Exporta as instâncias que você vai usar na lógica
export const auth = getAuth(app);
export const db = getFirestore(app);
