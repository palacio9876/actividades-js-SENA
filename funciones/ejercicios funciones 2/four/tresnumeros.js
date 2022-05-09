//Cree un programa que reciba tres números y muestre el mayor. En caso de que los números sean iguales
//también se debe mostrar al usuario
let num1=parseInt(prompt("ingrese un numero"));
let num2=parseInt(prompt("ingrese un numero"));
let num3=parseInt(prompt("ingrese un numero"));

function mayor(m,n,o) {
    if (num1>num2 && num1>num3){
        console.log("el numero mayor es: ", num1);
    }
    if (num2>num1&& num2>num3){
        console.log("el numero mayor es: ", num2);
    }
    if (num3>num2 && num3>num1){
        console.log("el numero mayor es: ", num3);
    }
    if(num1==num2 && num1==num3){
        console.log("son iguales");
    }
   return m,n,o;
}
let final=mayor(num1,num2,num3);
