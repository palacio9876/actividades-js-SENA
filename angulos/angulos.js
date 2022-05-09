//Cree un programa que lea los tres ángulos internos de un triángulo y muestre si los ángulos corresponden a un triángulo o no.

let angulo1=parseFloat(prompt("ingrese el primer ángulo"));
let angulo2=parseFloat(prompt("ingrese el segundo ángulo"));
let angulo3=parseFloat(prompt("ingrese el tercer ángulo"));
let suma=angulo1+angulo2+angulo3==180 ;

console.log("si es un triangulo: ", suma,"no es un triangulo: ", !suma);