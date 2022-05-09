//En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no
//pagan IVA, el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos
//mencionados y muestre si el producto paga IVA o no
let mercado =(prompt("ingrese alguno de estos productos: lentejas, crema, arroz y vino"));
const LENTEJAS=("lentejas");
const CREMA=("crema");
const ARROZ=("arroz");
const VINO=("vino");
function sper (l,c,a,v) {
    if ( mercado == l || mercado == a){
        console.log("este producto no paga IVA");
    }
    else{
        console.log("este producto paga IVA");
    }
    return l,c,a,v;
}
let supermercado = sper(LENTEJAS, CREMA, ARROZ, VINO);
