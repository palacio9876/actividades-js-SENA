/*Dado el arreglo [1,2,3,4,5,6]
Iterar por todos los elementos dentro del arreglo utilizando while y mostrarlos en pantalla.*/
let elementos=[1,2,3,4,5,6];
let cero=0;

while (cero<elementos.length) {
    console.log(elementos[cero]);
    cero++;
}
console.log("--------------------------------");
//Iterar por todos los elementos dentro del arreglo utilizando el ciclo “for” y mostrarlos en pantalla
let elementos1=[1,2,3,4,5,6];

for (let i = 0; i < elementos1.length; i++) {
    console.log(elementos1[i]);
    
}
console.log("-------------------------------");
//Mostrar todos los elementos dentro del arreglo sumándole uno a cada uno.
let elementos2=[1,2,3,4,5,6];
for (let i = 0; i < elementos2.length; i++) {
    console.log("elementos", elementos2[i], "mas uno", elementos2[i]+1);
}
console.log("-------------------------------");
//Crear una copia del arreglo usando el ciclo “for” pero con todos los elementos incrementados en 1.
let elementos3=[1,2,3,4,5,6];
let datos=[];
for (let i = 0; i < elementos3.length; i++) {
    datos.push(elementos3[i]+1);
    console.log("copia ", datos);
}
console.log("-------------------------------");
//Calcular el promedio de todos los elementos del arreglo
let promedio=[1,2,3,4,5,6];
let suma=0;

for (let i = 0; i < promedio.length; i++) {
    suma=suma+promedio[i];
    console.log("elementos", promedio[i]);
    }
    console.log("promedio: ", suma / promedio.length);