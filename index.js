let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let cero = document.getElementById("cero");
let igual = document.getElementById("igual");
let punto = document.getElementById("punto");
let suma1 = document.querySelector(".operaciones12");
let operacion1 = document.querySelector(".operacion1");
let sumandos = document.querySelector("#mas");
let resta = document.querySelector("#menos");
let multiplicacion = document.querySelector("#por");
let division = document.querySelector("#entre");
let raiz = document.querySelector("#raiz");
let potencia = document.querySelector("#potencia");
let ce = document.querySelector("#ce");
let suma2 = document.querySelector("#valor");
let seleccionOperacion = false;

function valorPor() {
  operacion1.innerHTML = "";
  let valor = "x";
  operacion1.append(valor);
  seleccionOperacion = true;
}
function valorMas() {
  operacion1.innerHTML = "";
  let valor = "+";
  operacion1.append(valor);
  seleccionOperacion = true;
}
function valorMenos() {
  operacion1.innerHTML = "";
  let valor = "-";
  operacion1.append(valor);
  seleccionOperacion = true;
}
function valorDivision() {
  operacion1.innerHTML = "";
  let valor = "/";
  operacion1.append(valor);
  seleccionOperacion = true;
}
function valorRaizcuadrada() {
  operacion1.innerHTML = "";
  let valor = "√";
  operacion1.append(valor);
  seleccionOperacion = true;
}
function valorMas() {
  operacion1.innerHTML = "";
  let valor = "+";
  operacion1.append(valor);
  seleccionOperacion = true;
}
function valorPotencia() {
  operacion1.innerHTML = "";
  let valor = "**";
  operacion1.append(valor);
  seleccionOperacion = true;
}
function valorCe() {
  suma1.innerHTML = "";
  suma2.innerHTML = "";
  operacion1.innerHTML = "";
  seleccionOperacion = false;
}

function numero0() {
  let numero = 0;
  suma1.append(numero.toString());
}
function numero1() {
  let numero = 1;
  suma1.append(numero.toString());
}
function numero2() {
  let numero = 2;
  suma1.append(numero.toString());
}
function numero3() {
  let numero = 3;
  suma1.append(numero.toString());
}
function numero4() {
  let numero = 4;
  suma1.append(numero.toString());
}
function numero5() {
  let numero = 5;
  suma1.append(numero.toString());
}
function numero6() {
  let numero = 6;
  suma1.append(numero.toString());
}
function numero7() {
  let numero = 7;
  suma1.append(numero.toString());
}
function numero8() {
  let numero = 8;
  suma1.append(numero.toString());
}
function numero9() {
  let numero = 9;
  suma1.append(numero.toString());
}

function numeroigual() {
  let numero = "=";
  suma1.append(numero);
}
function numeropunto() {
  let numero = ".";
  suma1.append(numero);
}

function numero00() {
  let numero = 0;
  suma2.append(numero.toString());
}
function numero01() {
  let numero = 1;
  suma2.append(numero.toString());
}
function numero02() {
  let numero = 2;
  suma2.append(numero.toString());
}
function numero03() {
  let numero = 3;
  suma2.append(numero.toString());
}
function numero04() {
  let numero = 4;
  suma2.append(numero.toString());
}
function numero05() {
  let numero = 5;
  suma2.append(numero.toString());
}
function numero06() {
  let numero = 6;
  suma2.append(numero.toString());
}
function numero07() {
  let numero = 7;
  suma2.append(numero.toString());
}
function numero08() {
  let numero = 8;
  suma2.append(numero.toString());
}
function numero09() {
  let numero = 9;
  suma2.append(numero.toString());
}

function valorpunto0() {
  suma1.append(".");
}

// uno.addEventListener("click", numero1);
// dos.addEventListener("click", numero2);
// tres.addEventListener("click", numero3);
// cuatro.addEventListener("click", numero4);
// cinco.addEventListener("click", numero5);
// seis.addEventListener("click", numero6);
// siete.addEventListener("click", numero7);
// ocho.addEventListener("click", numero8);
// nueve.addEventListener("click", numero9);
// cero.addEventListener("click", numero0);

function valorpunto() {
  let suma12 = suma1.value;
  //   if (!suma12.includes(".")) {
  //     suma1.append(".");
}
// }

function valor() {
  if (operacion1.textContent === "x") {
    let resultado = Number(suma1.textContent) * Number(suma2.textContent);
    suma2.innerHTML = "";
    suma1.innerHTML = resultado;
    operacion1.innerHTML = "";
  } else if (operacion1.textContent === "+") {
    let resultado = Number(suma1.textContent) + Number(suma2.textContent);
    suma2.innerHTML = "";
    suma1.innerHTML = resultado;
    operacion1.innerHTML = "";
  } else if (operacion1.textContent === "-") {
    let resultado = Number(suma1.textContent) - Number(suma2.textContent);
    suma2.innerHTML = "";
    suma1.innerHTML = resultado;
    operacion1.innerHTML = "";
  } else if (operacion1.textContent === "/") {
    let resultado = Number(suma1.textContent) / Number(suma2.textContent);
    suma2.innerHTML = "";
    suma1.innerHTML = resultado;
    operacion1.innerHTML = "";
  } else if (operacion1.textContent === "**") {
    let resultado1 = Number(suma1.textContent);
    let resultado2 = Number(suma2.textContent);
    let valor = exponente(resultado1, resultado2);
    suma2.innerHTML = "";
    suma1.innerHTML = valor;
    operacion1.innerHTML = "";
    return (suma2.textContent.innerHTML = valor);
  } else if (operacion1.textContent === "√") {
    let resultado = Math.sqrt(parseInt(suma1.textContent));
    suma2.innerHTML = "";
    suma1.innerHTML = resultado;
    operacion1.innerHTML = "";
  }
}

function exponente(base, exponente) {
  if (exponente === 0) {
    return 1;
  }
  let array = Array(exponente).fill(base);
  let valor = array.reduce((acc, item) => acc * item);
  return valor;
}

sumandos.addEventListener("click", valorMas);
resta.addEventListener("click", valorMenos);
multiplicacion.addEventListener("click", valorPor);
division.addEventListener("click", valorDivision);
raiz.addEventListener("click", valorRaizcuadrada);
potencia.addEventListener("click", valorPotencia);
ce.addEventListener("click", valorCe);
punto.addEventListener("click", valorpunto);
igual.addEventListener("click", valor);

uno.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero01();
  } else {
    numero1();
  }
});
dos.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero02();
  } else {
    numero2();
  }
});
tres.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero03();
  } else {
    numero3();
  }
});

cuatro.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero04();
  } else {
    numero4();
  }
});
cinco.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero05();
  } else {
    numero5();
  }
});
seis.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero06();
  } else {
    numero6();
  }
});
siete.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero07();
  } else {
    numero7();
  }
});
ocho.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero08();
  } else {
    numero8();
  }
});
nueve.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero09();
  } else {
    numero9();
  }
});
cero.addEventListener("click", function () {
  if (seleccionOperacion) {
    numero00();
  } else {
    numero0();
  }
});

punto.addEventListener("click", function () {
  if (seleccionOperacion) {
    valorpunto0;
  } else {
    valorpunto;
  }
});
