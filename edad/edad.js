//Cree un programa que lea la edad de un usuario e imprima un mensaje que diga si el usuario es mayor de edad o no.
const edadDelUsuario = parseInt(prompt("¿Cuál es tu edad?"));
if(edadDelUsuario >= 18){
    alert("Eres mayor de edad");
}else{
    alert("Eres menor de edad");
}