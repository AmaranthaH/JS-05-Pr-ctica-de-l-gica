/**
 * Escriba un programa que solicite al usuario sus datos: nombre de usuario, edad y una lista de sus películas favoritas. Almacene la información y luego muéstrela en la consola. Tenga en cuenta que el resultado de las películas debe agregar un pequeño mensaje como: 'La película {película} es una de mis favoritas'.
 */
var nombre = prompt("Ingresa tu nombre:");
var edad = prompt("Ingresa tu edad:");
var peliculasNum = prompt("¿Cuántas películas favoritas tienes?");
var peliculasFavoritas = [];
var usuario=[];

usuario.push(nombre,edad,peliculasFavoritas);

console.log("Nombre: " + usuario[0]);
console.log("Edad: " + usuario[1]);
console.log("Películas favoritas:");

if(peliculasNum==0){
    console.log("Sin peliculas favoritas");
}else{
    for (var i = 0; i < peliculasNum; i++) {
        var pelicula = prompt("Ingresa el nombre de una de tus películas favoritas:");
        peliculasFavoritas.push(pelicula);
    }
    peliculasFavoritas.forEach(function(pelicula) {
        console.log(" (" + pelicula + ")"+ " es una de mis peliculas favoritas.");
    })
}


