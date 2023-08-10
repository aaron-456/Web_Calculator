let operacionActual = ""; // Variable para almacenar el operador seleccionado por el usuario.
let numBuffer = 0; // Variable para almacenar temporalmente el valor numérico ingresado antes de seleccionar un operador.
let valorEnPantalla = 0; // Variable para almacenar el valor numérico actual que se muestra en el div de visualización (display).

function manejarNumeros(valor) {
  const display = document.getElementById("display"); // Obtener el div de visualización.
  display.textContent += valor; // Agregar el valor numérico al contenido del div.
  valorEnPantalla = parseInt(display.textContent); // Actualizar el valor actual (valorEnPantalla) con el contenido del div convertido a número.
}

function manejarOperador(operador) {
  operacionActual = operador; // Almacenar el operador seleccionado por el usuario.
  numBuffer = valorEnPantalla; // Guardar el valor actual en numBuffer antes de borrar el contenido del div.
  const display = document.getElementById("display"); // Obtener el div de visualización.
  display.textContent = ""; // Borrar el contenido del div para permitir que el usuario ingrese otro número.
}

function calcular() {
  const display = document.getElementById("display"); // Obtener el div de visualización.
  const valorActual = valorEnPantalla; // Almacenar el valor actual en una variable local.

  if (operacionActual === "+") {
    display.textContent = numBuffer + valorActual; // Realizar la suma y mostrar el resultado en el div.
  } else if (operacionActual === "-") {
    display.textContent = numBuffer - valorActual; // Realizar la resta y mostrar el resultado en el div.
  } else if (operacionActual === "*") {
    display.textContent = numBuffer * valorActual; // Realizar la multiplicación y mostrar el resultado en el div.
  } else if (operacionActual === "/") {
    if (valorActual === 0) {
      display.textContent = "Error: División por cero no permitida"; // Mostrar un mensaje de error si el divisor es cero.
    } else {
      display.textContent = numBuffer / valorActual; // Realizar la división y mostrar el resultado en el div.
    }
  }
}
