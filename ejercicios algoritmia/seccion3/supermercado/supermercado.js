//En un supermercado se tiene los siguientes productos: lentejas, crema, arroz y vino. Las lentejas y el arroz no pagan IVA,
//el vino y la crema si. Cree un programa que reciba el nombre de alguno de los productos mencionados y muestre si el producto paga IVA o no.
let producto=(prompt("ingrese alguno de estos productos: lentejas, crema, arroz y vino"));
const LENTEJAS=("lentejas");
const CREMA=("crema");
const ARROZ=("arroz");
const VINO=("vino");
if (producto == LENTEJAS || producto == ARROZ){
    alert("este producto no paga IVA")
}
else{
    alert("este producto paga IVA")
}