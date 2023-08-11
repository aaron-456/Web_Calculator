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

{
  // let currentValue = ""; //operador actual
  // let valorActual = 0; //Valor actual
  // let valorPasado = 0;
  // //Esta funcion se encarga de aser que se reflejen los numeros en el div donde se vana a almacenar
  // function displayNumbers(value) {
  //   const numbers = document.getElementById("containerLogic");
  //   numbers.textContent += value;
  //   valorActual = parseInt(numbers.textContent);
  // }
  // function displayOperators(operator) {
  //   const operators = document.getElementById("containerLogic");
  //   currentValue = operator;
  //   valorPasado = valorActual;
  //   operators.textContent = operator;
  // }
  // function calcular() {
  //   const calculation = document.getElementById("containerLogic");
  //   const valorP = valorActual;
  //   if (currentValue === "+") {
  //     calculation.textContent = parseInt(valorP) + parseInt(valorPasado);
  //   }
  //   if (currentValue === "-") {
  //     calculation.textContent = parseInt(valorPasado) - parseInt(valorP);
  //   }
  //   if (currentValue === "*") {
  //     calculation.textContent = parseInt(valorP) * parseInt(valorPasado);
  //   }
  //   if (currentValue === "/") {
  //     calculation.textContent = parseFloat(valorPasado) / parseFloat(valorP);
  //   }
  // }
}
