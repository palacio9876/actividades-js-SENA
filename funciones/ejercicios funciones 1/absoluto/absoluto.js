//Cree un programa que tome un número real e imprima su valor absoluto
let numero=parseFloat(prompt("ingrese un numero real"));
function absoluto(n) {
    if (n<0) {
        return n * (-1);
    }if(n>0){
        return n * (-1);
    }
}
let valorAbsoluto=absoluto(numero);
console.log("el valor absoluto es: ", valorAbsoluto);