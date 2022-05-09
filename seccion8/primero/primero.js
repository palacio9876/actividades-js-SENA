//terar por todos los elementos del arreglo utilizando el ciclo “for” y mostrarlos en pantalla
let arreglo = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9] ];
for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo[i].length; j++) {
        console.log(arreglo[i][j]);    
        }
    }
console.log("-----------------------------");
// Crear otro arreglo que sea idéntico al arreglo dado, pero con todos los elementos incrementados en 1.
let arreglo2 = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9] ];
let copia=[]
for (let i = 0; i < arreglo2.length; i++) {
    for (let m = 0; m < arreglo2[i].length; m++) {
        copia.push(arreglo2[i][m]+1)
        console.log(copia);
    }
}
console.log("-------------------------------");
// Usando el ciclo “for” Calcular el promedio de todos los elementos del arreglo
let arreglo3 = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9] ];
