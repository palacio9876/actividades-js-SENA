let num=parseFloat(prompt("ingrese un numero"));
switch (num%5) {
    case 0:
        console.log("si es divisble entre 5")
    break;

    default:
        console.log("no es divisible entre 5")
    break;
}
if (num%5==0) {
    console.log("si es divisible entre 5")
} else {
    console.log("no es divisible entre 5")
}