import { generarAlgoritmo } from "./generarAlgoritmo.js";
import { crear, convertir } from "./funciones.js";
async function inicio() {
  generarAlgoritmo();
  if (localStorage.cadena === undefined || localStorage.turno===undefined) {
    localStorage.cadena = "[]";
    localStorage.turno=0;
  }
  let numero = convertir();
  if (numero != 0) {
    let elemento;
   actualizarDatos(numero);
  }
}
function actualizarDatos(numero){
  let elemento;
  let resultados = document.querySelector(".resultados");
  let partes = document.querySelectorAll('.parte');
  if(partes.length>=0){
    for (let i = 0; i < partes.length; i++){
      resultados.removeChild(partes[i]);
    }
  }
  for (let i = 0; i < numero.length; i++) {
    elemento = crear(numero[i]);
    resultados.appendChild(elemento);
  }
}
export { inicio, actualizarDatos };
