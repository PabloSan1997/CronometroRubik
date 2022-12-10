import { actualizarDatos } from "./inicio.js";
import { borradoConcreto } from "./reiniciar.js";
//  <div class="parte">
//   <p class="num">1</p>
//   <p class="tiemp">0:00</p>
//   <p class="algor">R2 2U R2 2U R2 2U R2 2U R2 2U R2 2U R2 2U R2 2U R2 2U</p>
// </div>;
function crear(informacion) {
  let parte = document.createElement("div");
  parte.className = "parte";
  parte.id = `Numero:${informacion.id}`;
  let num = document.createElement("p");
  num.className = "num";
  num.textContent = informacion.id;
  let tiemp = document.createElement("p");
  tiemp.className = "tiemp";
  tiemp.textContent = traducir(informacion.tiempo);
  let algor = document.createElement("p");
  algor.className = "algor";
  algor.textContent = informacion.algoritmo;
  parte.appendChild(num);
  parte.appendChild(tiemp);
  parte.appendChild(algor);
  return parte;
}

function convertir() {
  let mira = localStorage.cadena;
  if (mira != "") return JSON.parse(mira);
  return 0;
}
function traducir(nume) {
  let ms = nume % 1000;
  nume = (nume - ms) / 1000;
  let secs = nume % 60;
  nume = (nume - secs) / 60;
  let mins = nume % 60;
  ms=Number(ms.toFixed(0));
  if(ms<10){
    ms='00';
  }else if(ms>10 && ms<100){
    ms=ms.toString();
    ms = ms.split('');
    ms.pop();
    ms = `0${ms.join('')}`;
  }else{
    ms=ms.toString();
    ms = ms.split('');
    ms.pop();
    ms = ms.join('');
  }
  let textos = `${mins}:${secs}.${ms}`;
  return textos;
}
function registrar(milisegundos) {
  let datos = convertir();
  let lugar;
  let nuevoObjeto;
  let textito = document.querySelector(".revolver").textContent;
  if (datos.length === 0) {
    nuevoObjeto = {
      id: 1,
      tiempo: milisegundos,
      algoritmo: textito,
    };
    localStorage.cadena = JSON.stringify([nuevoObjeto]);
  } else {
    lugar = datos[datos.length - 1].id + 1;
    nuevoObjeto = {
      id: lugar,
      tiempo: milisegundos,
      algoritmo: textito,
    };
    datos.push(nuevoObjeto);
    localStorage.cadena = JSON.stringify(datos);
  }
  actualizarDatos(convertir());
  localStorage.turno = parseInt(localStorage.turno) + 1;
  borradoConcreto();
}

export { crear, convertir, traducir, registrar };
