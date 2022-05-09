//Programe una función que permita encontrar el número menor contenido en una matriz recibida como
//parámetro.
let arregloGrr = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
let control = 0;
let arreglo2=[[],[],[]];
for (let i = 0; i < arregloGrr.length; i++){
    for (let j = 0; j < arregloGrr[i].length; j++){
        arreglo2[i].push(arregloGrr[i][j]+1);
    }
 console.log(arreglo2);
}