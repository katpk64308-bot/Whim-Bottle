import { db } from "./confirebase.js";
   const refTemp = ref(db, "tempSelecao");

document.getElementById("temp").textContent = i

 let i = 1;
if ( refTemp === frio) {

    const intervalo = setInterval(() => {
        document.getElementById("temp").textContent = i
        i++;

        if (i > 10) {
            clearInterval(intervalo);
        }

    }, 300);
}
    

if ( refTemp === normal) {


    const intervalo = setInterval(() => {
        console.log(i);
        i++;

        if (i > 22) {
            clearInterval(intervalo);
        }

    }, 300);
}
    

if ( refTemp === quente) {


    const intervalo = setInterval(() => {
        console.log(i);
        i++;

        if (i > 40) {
            clearInterval(intervalo);
        }

    }, 300);
}
    