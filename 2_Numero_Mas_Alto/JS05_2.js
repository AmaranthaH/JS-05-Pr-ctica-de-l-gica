/**
 * Escribe un programa que solicite 10 números. Usando operadores lógicos y cualquier otra función/estructura de JavaScript que haya visto antes, determine y genere el mayor de esos números.
 */
var numeros = [];
var contador = 0;

do {
    var numero = parseInt(prompt("Ingresa el número " + (contador + 1) + ":"));
    if (!isNaN(numero)) {
        numeros.push(numero);
        contador++;
    } else {
        alert("Por favor, ingresa un número válido.");
    }
} while (contador < 10);

// Encontrar el mayor número en el arreglo
var mayor = numeros[0];
for (var i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
        mayor = numeros[i];
    }
}

// Mostrar el mayor número
console.log("El mayor número ingresado es: " + mayor);
