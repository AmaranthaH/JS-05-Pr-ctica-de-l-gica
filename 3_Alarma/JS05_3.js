/*
*Escribe un programa que pregunte a un usuario la cantidad de segundos necesarios hasta que se ejecute una alarma (mensaje) junto con un texto para mostrar una vez que hayan pasado esos segundos en tiempo real.

Ejemplo de resultado : "Hora de acostarse después de 10 segundos".
 */

// Segundos para la alarma
var segundos = parseInt(prompt("Ingresa tiempo para la alarma:"));

// Mostrar mensaje después de la cantidad de segundos especificada
function mostrarMensaje() {
    console.log("Hora de acostarse después de " + segundos + " segundos!");
}

// Manda a llamar el mensaje despues del tiempo especificado
setTimeout(mostrarMensaje, segundos * 1000); // setTimeout espera milisegundos, por eso multiplicamos por 1000
