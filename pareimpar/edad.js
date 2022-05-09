//Cree un programa que lea un número y muestre si este es par o impar.
let num=parseInt(prompt("ingrese el numero"));
let paroimpar= num%2 ==0;

console.log("es par: ", paroimpar, "es impar", !paroimpar);