/**
 * Escriba un programa que solicite un número entero n, Donde  1 <= n. Resuelve esto usando recursividad.
 */

// Solicitar al usuario un número entero
var n = parseInt(prompt("Ingresa un número entero positivo:"));

// Función recursiva para imprimir números desde 1 hasta n
function imprimirNumeros(n) {
    // Caso base: cuando n llega a 1, imprimirlo y retornar
    //condicion para que acabe el bucle
    if (n === 1) {
        console.log(n);
        return;
    }
    // Llamar recursivamente a la función con n-1
    imprimirNumeros(n - 1);
    console.log(n);
}

// Validar si el número es válido
if (isNaN(n) || n < 1) {
    console.log("¡Error!, ingresar un número entero positivo.");
} else {
    // Llamar a la función para imprimir números desde 1 hasta n
    console.log("Números desde 1 hasta " + n + ":");
    imprimirNumeros(n);
}





