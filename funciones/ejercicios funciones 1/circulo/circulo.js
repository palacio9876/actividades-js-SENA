//Cree un programa que tome el radio de un círculo e imprima su área y perímetro
let radio=parseFloat(prompt("ingrese el radio"));
function are(r) {
    let area=r*r*3.1415;
    return area;
}
let areaCirculo = are(radio);
console.log("el area del circulo es: ", areaCirculo);

function peri(p) {
    let perime=2*3.1415*p;
    return perime;
}
let perimetro=peri(radio);
console.log("el perimetro es: ", perimetro);