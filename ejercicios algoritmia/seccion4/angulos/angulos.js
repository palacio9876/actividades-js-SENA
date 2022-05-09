let angulo1=parseFloat(prompt("ingrese el primer ángulo"));
let angulo2=parseFloat(prompt("ingrese el segundo ángulo"));
let angulo3=parseFloat(prompt("ingrese el tercer ángulo"));
switch (angulo1+angulo2+angulo3) {
    case 180:
        console.log("si es un triangulo")
    break;

    default:
        console.log("no es un triangulo")
    break;
}
if (angulo1+angulo2+angulo3==180) {
    console.log("si es un triangulo")
} else {
    console.log("no es un triangulo")
}