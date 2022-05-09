//Cree un programa que muestre el promedio de n números, dejándose de solicitar números cuando se
//introduzca el cero.
let numero = parseFloat(prompt("ingrese un numero"));
let suma = 0;
let contadorDatos = 0;

while (numero != 0) {
    suma=suma+numero;
    contadorDatos++;
    numero = parseFloat(prompt("ingrese un numero"));
}
console.log("promedio ", suma / contadorDatos);