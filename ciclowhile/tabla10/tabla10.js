//. Cree un programa que muestre la tabla de multiplicar del 10, del 1 al 50.
let numero=parseInt(prompt("ingrese un numero del 1 al 50"));
let num=1;
while (num<=numero) {
    num++;
    console.log("el numero ingresado, por 10 es: ", (num*10));
}