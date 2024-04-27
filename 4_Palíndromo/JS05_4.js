/*
 * Escriba un programa que solicite una palabra u oración (puede estar en mayúscula, tener espacios y puntuación). Averigua si la oración/palabra es un palíndromo o no. Ignorando la puntuación, los espacios y las letras mayúsculas.
 */

// Solicitar al usuario una palabra u oración
var textoDeUsuario = prompt("Ingresa una palabra u oración para verificar si es un palíndromo:");

function eliminarAcentosYEspacios(texto) {
    var acentos = {
        "á": "a",
        "é": "e",
        "í": "i",
        "ó": "o",
        "ú": "u",
        "ü": "u", 
        "ñ": "n"
    };

    // Reemplazar los caracteres acentuados y los espacios
    return texto.toLowerCase().replace(/[áéíóúüñ\s]/g, function(match) {
        return acentos[match] || '';
    }).replace(/[^a-z]/g, ''); // Eliminar otros caracteres no alfabéticos
}

function textoPalindromo(textoOriginal) {
    // Eliminar acentos, espacios, puntuación y convertir a minúsculas
    var textoFiltrado = eliminarAcentosYEspacios(textoOriginal);
    
    // Se divide el texto en caracteres, se invierte el texto y se une de nuevo el texto
    var textoInvertido = textoFiltrado.split('').reverse().join('');

    // Se compara el texto normal con el invertido
    return textoFiltrado === textoInvertido;
}

// Verificacion si es palindromo
if (textoPalindromo(textoDeUsuario)) {
    console.log("Texto, '" + textoDeUsuario + "' es un palíndromo");
} else {
    console.log("Texto, '" + textoDeUsuario + "' no es un palíndromo.");
}
