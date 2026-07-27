import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAfI5mcz1F8pdx1shmj5u_6eDA4xpa-06Q",
    authDomain: "simulador-led.firebaseapp.com",
    databaseURL: "https://simulador-led-default-rtdb.firebaseio.com",
    projectId: "simulador-led",
    storageBucket: "simulador-led.firebasestorage.app",
    messagingSenderId: "662424739218",
    appId: "1:662424739218:web:813f28a9e33544109c754b"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);