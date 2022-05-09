//Cree un programa que tome el precio de un producto e imprima su precio final al consumidor con un IVA de 19%
let precio=parseFloat(prompt("ingrese el precio"));
function iva(i) {
    let valorIva=i*0.19+i;
    return valorIva;
}
let valorFinal=iva(precio);
console.log("el vlaor final es: ", valorFinal);