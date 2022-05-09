// Cree un programa que use una función de un parámetro, a la cual se le pase como argumento un arreglo, de
//tal manera que la función retorne la longitud(número de elementos) del arreglo
let arreglo = [74, 37, 78, 44, 75, 25, 79, 45];
function longitud(longi) {
    longi = arreglo.length;
    return longi;   
}
console.log(longitud(arreglo));