let currentValue = ""; //operador actual
let valorActual = 0; //Valor actual
let valorPasado = 0;

//Esta funcion se encarga de aser que se reflejen los numeros en el div donde se vana a almacenar
function displayNumbers(value) {
  const numbers = document.getElementById("containerLogic");
  numbers.textContent += value;
  valorActual = parseInt(numbers.textContent);
}

function displayOperators(operator) {
  currentValue = operator;
  valorPasado = valorActual;
  const operators = document.getElementById("containerLogic");
  operators.textContent = "";
}

function borrarNumero() {
  const numbers = document.getElementById("containerLogic");
  const contenido = numbers.textContent;

  numbers.textContent = contenido.slice(0, -1);

  const tranformaraNumeros = parseInt(numbers.textContent);
}

function resetear() {
  const reset = document.getElementById("containerLogic");
  reset.textContent = "";
}

function calcular() {
  const calculation = document.getElementById("containerLogic");
  const valorPrincipal = valorActual;

  if (currentValue === "+") {
    calculation.textContent = valorPasado + valorPrincipal;
  } else if (currentValue === "-") {
    calculation.textContent = valorPasado - valorPrincipal;
  } else if (currentValue === "*") {
    calculation.textContent = valorPasado * valorPrincipal;
  } else if (currentValue === "/") {
    calculation.textContent = valorPasado / valorPrincipal;
  }
}
