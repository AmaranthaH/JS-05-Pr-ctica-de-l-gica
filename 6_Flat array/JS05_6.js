/**
 * Escriba un programa que tome la siguiente matriz anidada y la aplane (convirtiéndola en una matriz 1D). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamada, recursividad, etc.
 */
let multiDimension = [1, [2, 3,[4, 5, [6]]]];
var i=1;

function aplanarMatriz(matriz) {
    let resultado = [];
    console.log("0");

    // Iniciar la ejecución de la funcion, o si no, no empieza
    //Mandarla a llamar
    encontrarArreglo(matriz);

    // Función auxiliar recursiva para aplanar la matriz
    function encontrarArreglo(matrices) {
        matrices.forEach(array => {
            if (Array.isArray(array)) {
                // Si el elemento es una matriz, llamar recursivamente a encontrarArreglo
                encontrarArreglo(array);
            } else {
                // Si el elemento no es una matriz, añadirlo al resultado
                resultado.push(array);
            }
        });
    }

    return resultado;
}

let matrizAplanada = aplanarMatriz(multiDimension);
console.log(matrizAplanada);
