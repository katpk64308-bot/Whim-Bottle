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

import { ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
import { db } from "./confirebase.js";

const sinalBarra = ref(db, "controleBarra");
export let porcentagem = 0;

onValue(sinalBarra, (snapshot) => {
    const dados = snapshot.val();

    if (dados && dados.porcentagem !== undefined) {
        porcentagem = dados.porcentagem;

        document.getElementById("statusPorcentagem").innerText = porcentagem + "%";
    }
});

window.alterarTemp = async function (tempEscolhida) {
    const refTemp = ref(db, "tempSelecao");

    await set(refTemp, {
        temp: tempEscolhida,
        horario: Date.now()
    });
};