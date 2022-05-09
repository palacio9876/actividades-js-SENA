//Cree un programa que calcula la suma de los primeros n números naturales
let numeros=parseInt(prompt("ingrese un numero"));
let cero=0;
let suma=0;
while (cero<=numeros) {
    cero++;
    console.log(cero);
    suma=suma+cero;
}
console.log("el total es: ", suma);
