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

        document.getElementById("statusPorcentagem").innerText =
            porcentagem + "%";

        const ml = (porcentagem * 1000) / 100;

        document.getElementById("statsML").innerText =
            "ML: " + ml;
    }
});


// ==============================

const refTemp = ref(db, "tempSelecao");
//img
function atualizarImagemTemperatura(valor) {
    const imagem = document.getElementById("imagemTemperatura");

    if (!imagem) {
        return;
    }

    const imagens = {
        frio: "img/imgtemp1.png",
        normal: "img/imgtemp2.png",
        quente: "img/imgtemp3.png"
    };

    if (imagens[valor]) {
        imagem.src = imagens[valor];
    }
}


onValue(refTemp, (snapshot) => {

    const dadosTemp = snapshot.val();

    if (!dadosTemp || !dadosTemp.temp) {
        return;
    }

    const valor = dadosTemp.temp;

    atualizarImagemTemperatura(valor);
/*
=========================
erro em autera a função
de temperatura
=========================
*/
    let i = 1;
    let limite;

    if (valor === "frio") {
        limite = 10;
    }

    if (valor === "normal") {
        limite = 22;
    }

    if (valor === "quente") {
        limite = 40;
    }

    if (limite === undefined) {
        return;
    }

    const intervalo = setInterval(() => {

        document.getElementById("temp").textContent = i + "°C";

        i++;

        if (i > limite) {
            clearInterval(intervalo);
        }

    }, 1000);

});
//===============================
window.alterarTemp = async function(tempEscolhida) {

    localStorage.setItem("temperaturaEscolhida", tempEscolhida);
    atualizarImagemTemperatura(tempEscolhida);

    await set(refTemp, {
        temp: tempEscolhida,
        horario: Date.now()
    });

};