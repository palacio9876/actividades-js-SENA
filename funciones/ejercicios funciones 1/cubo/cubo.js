//Cree un programa que tome el lado de un cubo e imprima su volumen
let lado=parseFloat(prompt("ingrese el lado del cubo"));
function vol(v) {
    let volu=v*v*v;
    return volu;
}
let volumen=vol(lado);
console.log("el volumen es: ", volumen);