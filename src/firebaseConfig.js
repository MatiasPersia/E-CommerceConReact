// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyC2-Hm40FymBm7udmJFt3VT25jQf6wbL7o",
    authDomain: "clientesbase-8079b.firebaseapp.com",
    projectId: "clientesbase-8079b",
    storageBucket: "clientesbase-8079b.appspot.com",
    messagingSenderId: "113052907642",
    appId: "1:113052907642:web:33f94d8cfef7f6bbfda3c3",
    measurementId: "G-J7J1FRZ76F"
  };

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Obtén una referencia a la base de datos Firestore
const db = getFirestore(app);

export { db };