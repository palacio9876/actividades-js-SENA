//Cree un programa que tome el valor de un producto e imprima su precio final si éste tiene siempre un
//descuento del 10%
let precio=parseFloat(prompt("ingrese el precio"));
function iva(i) {
    let valorIva=i*0.10-i;
    return valorIva;
}
let valorFinal=iva(precio);
console.log("el vlaor final es: ", valorFinal);