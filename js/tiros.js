import { generarAlgoritmo } from "./generarAlgoritmo.js";
import { traducir, registrar } from "./funciones.js";
import { provesarResultados } from "./resultados.js";
let res = 0,
  res2 = 0,
  tie;
let crono = document.querySelector(".cronometro");
let intervalo;
function juego() {
  if (localStorage.turno < 5) {
    window.addEventListener("keyup", activar);
  }
  function activar(evento) {
    if (evento.key === " ") {
      window.removeEventListener("keyup", activar);
      window.addEventListener("keypress", pausa);
      res = new Date();
      intervalo = setInterval(function () {
        res2 = new Date();
        tie = res2 - res;
        crono.textContent = traducir(tie);
      }, 10);
    }
  }
  let pausa = () => {
    window.removeEventListener("keypress", pausa);
    clearInterval(intervalo);
    generarAlgoritmo();
    setTimeout(() => {
      if (localStorage.turno < 5) {
        window.addEventListener("keyup", activar);
      }else{
        provesarResultados();
      }
    }, 200);
    registrar(tie);
  };
}
export { juego };
