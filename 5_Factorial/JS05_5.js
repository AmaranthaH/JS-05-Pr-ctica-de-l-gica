/**
 * Escriba un programa que solicite un número entero n, Donde  1 <= n. Resuelve esto usando recursividad.
 * Es dar el resultado de un factorial
 */

// Solicitar al usuario un número entero
var n = parseInt(prompt("Ingresa un número entero positivo:"));

// Función recursiva para los numeros
function factorial(n) {
    // Caso base: cuando n llega a 1
    //condicion para que acabe el bucle
    if (n === 0) {
        return 1;
    }
    /// Llamar recursivamente a la función con n-1 y multiplicar por n
    return n * factorial(n - 1);
}

// Validar si el número es válido
if (isNaN(n) || n < 1) {
    console.log("Error, ingresar un número entero positivo.");
} else {
    // Calcular el factorial e imprimirlo
    var resultado = factorial(n);
    console.log("El factorial de " + n + " es: " + resultado);
}





