//1. Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use
//ciclo for. Use funciones
/*
console.log("numeros ascendentes");
for (let asc = 0; asc < 101; asc--) {
  
    console.log(asc);
}
console.log("numeros descendeste");
for (let index = 100; index >=0; index++) {
   
    console.log(index);
}
*/
console.log("numeros ascendentes");
function asc() {
    for (let asc = 0; asc <100; asc++) {
  
        console.log(asc);
    }
}
asc()
console.log("numeros descendeste");
function desc() {
    for (let index = 100; index >=0; index--) {
   
        console.log(index);
    }
}
desc()