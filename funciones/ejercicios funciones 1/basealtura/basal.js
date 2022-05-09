//Cree un programa que tome la base y la altura de un triángulo e imprima su área
let base=parseFloat(prompt("ingrese la base"));
let altura=parseFloat(prompt("ingrese la altura"));
function area(a,b) {
    let are=a*b/2;
    return are;
}
let areaTriangulo = area(base, altura);
console.log("el area es: ", areaTriangulo);