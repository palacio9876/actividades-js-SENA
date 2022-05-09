//Cree un programa que implemente una función que reciba como argumento un arreglo y retorne la suma de
//los cuadrados de sus elementos, luego, imprima el resultado
let arreglo = [5, 6];
let suma = 0;
for (let i = 0; i < arreglo.length; i++) {
    let cuadrado =arreglo[i]*arreglo[i];
    suma=cuadrado+suma;
}
console.log(suma);