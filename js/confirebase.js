/*  firebase
initializeApp
Ela serve para iniciar seu projeto.
firebaseConfig
e tipo uma chave de asseso.
getDatabase
abre a conexao com o banco.
ref
cria uma referência para um lugar específico do banco.
onValue
resebe alterações
set
coloa um novo valor no banco
*/
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

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
const db = getDatabase(app);

/*
=============================================
pega a informação*/
const sinalBarra = ref(db, "controleBarra");
export let porcentagem = 0;

onValue(sinalBarra, (snapshot) => {
    const dados = snapshot.val();

    if (dados && dados.porcentagem !== undefined) {

        porcentagem = dados.porcentagem;

        document.getElementById("statusPorcentagem").innerText = porcentagem + "%";
    }
});

//leva a informação
window.alterarTemp = async function (tempEscolhida) {
    const refCor = ref(db, "tempSelecao");

    await set(refCor, {
        temp: tempEscolhida,
        horario: Date.now()
    });
};

