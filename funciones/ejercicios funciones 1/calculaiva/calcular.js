//Cree un programa que lea una cantidad e imprima un porcentaje a calcular requerido sobre esa cantidad
let cantidad=parseFloat(prompt("ingrese el cantidad"));
let porcentaje=parseFloat(prompt("ingrese el porcentaje"));
function calculo(p,i) {
    let valor=p*i/100;
    return valor;
}
let valorFinal=calculo(cantidad, porcentaje);
console.log("el valor final es: ", valorFinal);