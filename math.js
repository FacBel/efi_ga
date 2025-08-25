// math.js
function suma(a, b) {
  return a + b;
}

function resta(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

// Esto es necesario para que las pruebas puedan usar estas funciones
module.exports = {
  suma,
  resta,
  multiplicar
};