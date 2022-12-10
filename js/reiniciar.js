import { convertir } from "./funciones.js";
let reiniciar = document.querySelector("h1.titulo");
function efecto() {
  reiniciar.addEventListener("mouseover", function () {
    this.textContent = "Reiniciar";
  });
  reiniciar.addEventListener("mouseout", function () {
    this.textContent = "Cronometo Rubik";
  });
  reiniciar.addEventListener("click", reiniciarFun);
}

function reiniciarFun() {
  if (confirm("¿Seguro que desea borrar todo?")) {
    localStorage.cadena = "[]";
    localStorage.turno = 0;
    location.reload();
  }
}
function borradoConcreto() {
  let elementos = document.querySelectorAll(".parte");
  if (elementos.length > 0) {
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].addEventListener("click", function () {
        if (confirm("¿Seguro que desea quitar este solve?")) {
          quitarElemento(this.id);
        }
      });
    }
  }
  function quitarElemento(direc) {
    direc = direc.split("");
    direc = direc.pop();
    let objeto = convertir();
    let indice = objeto.findIndex((elemento) => elemento.id == direc);
    objeto.splice(indice, 1);
    localStorage.cadena = JSON.stringify(objeto);
    localStorage.turno = parseInt(localStorage.turno) - 1;
    location.reload();
  }
}
export { efecto, borradoConcreto };
