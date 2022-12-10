let revolver = document.querySelector(".revolver");
let movimientos = ["R", "U", "F", "D", "B", "L"];
function generarAlgoritmo() {
  let anterior = 10;
  let actual = 10;
  let todoAlgoritmo = [];
  for (let i = 0; i < 20; i++) {
    let tres = parseInt(Math.random() * 3);
    while (anterior === actual) {
      actual = parseInt(Math.random() * 6);
    }
    switch (tres) {
      case 0:
        todoAlgoritmo[i] = movimientos[actual];
        break;
      case 1:
        todoAlgoritmo[i] = `2${movimientos[actual]}`;
        break;
      case 2:
        todoAlgoritmo[i] = `${movimientos[actual]}'`;
        break;
    }
    anterior = actual;
  }
  revolver.textContent = todoAlgoritmo.join(" ");
}

export { generarAlgoritmo };
