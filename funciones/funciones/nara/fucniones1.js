//SINTAXIS DE UNA FUNCION EN JAVASCRIPT
//SE UNA LA PALABRA RESERVADA function, seguida
//de el nombre de la funcion el cual debe empezar
//por minusculas y usar notacion lowerCamelCase,
//luego se sigue conb prantesis donde iran los 
//parametros(si tiene) de la funcion, 
//luego llaves que se
//contendran el bloque de instrucciones y por
//ultimo el retorno si es que tiene.

//funcion que recibe un numero y retorna su
//cuadrado
let n = parseFloat(prompt("Ingrese Numero"));
function cuadradoNumero(numero) {
    let cuadrado = numero * numero;
    return cuadrado;
}
let valor = cuadradoNumero(n);
console.log("El numero elevado al cuadrado es: ", valor);

//funcion con dos argumentos
//funcion que retorna la suma de dos numeros
let numeroA = parseFloat(prompt("Ingrese primero numero"));
let numeroB = parseFloat(prompt("Ingrese segundo numero"));
function suma(a, b) {
    let sumaNumeros = a + b;
    return sumaNumeros;
}

let total = suma(numeroA, numeroB);
console.log("La suma es: ", total);




