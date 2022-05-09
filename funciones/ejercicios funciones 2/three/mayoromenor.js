//Cree un programa que reciba dos números y muestre el mayor. En caso de que los números sean iguales
//también se debe mostrar al usuario
let num1=parseInt(prompt("ingrese un numero"));
let num2=parseInt(prompt("ingrese un numero"));

function mayor(m,n) {
   if (num1>num2){
       console.log("es mayor", num1);
   }
   if (num2>num1) {
       console.log("es mayor",num2);
   }
   if (num1==num2) {
       console.log("los numeros son iguales");
   }
   return m,n;
}
let maymen=mayor(num1,num2);
