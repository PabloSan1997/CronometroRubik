import { convertir, traducir } from "./funciones.js";

function provesarResultados(){
    if(localStorage.turno>=5){
        registrado();
    }
}
function registrado(){
   let tiempos = tener();
   let elementos = document.querySelectorAll('.salida');
   let media = sumar(tiempos)/5;
   let peor = tiempos.pop();
   let mejor = tiempos.shift();
   let avg5 = sumar(tiempos)/3;
   elementos[0].textContent=traducir(media);
   elementos[1].textContent=traducir(mejor);
   elementos[2].textContent=traducir(peor);
   elementos[3].textContent=traducir(avg5);
}
function sumar(cade){
    let sumas = 0;
    for(let i=0;i<cade.length;i++){
        sumas+=cade[i];
    }
    return sumas;
}
function tener(){
    let objeto = convertir();
    let tiempos = [];
    for(let i=0;i<objeto.length;i++){
        tiempos[i]=objeto[i].tiempo;
    }
    return tiempos.sort((a,b)=>a-b);
}
export {provesarResultados}