//un arreglo es una estructura de datos.
//ESta estructura contiene elementos, los
//cuales se encuentran ordenados o indexados
//mediante indices de tipo entero. Los elementos
//pueden ser de cualquier tipo.

//sintaxis
//arreglo vacío. Este arreglo es flexible, puede
//contener tantos elementos como se necesiten
let arregloVacio = [];
//arreglo no vacio. Los elementos se separan con ,
let arreglo = [0, 1, 2, 3, 500, 4, 5, 6];
//operaciones:
//lectura. Para leer un elemento se usa su indice.
//El primer elemento tiene siempre indice 
console.log("-----------");
//lectura del primer elemento. Se usan corchetes
console.log("Elemento de indice 0: ", arreglo[0]);
console.log("Elemento de indice 4: ", arreglo[4]);
//Crear un arreglo con los días de la semana asignando
//el indice 0 al domingo, luego mostrar todos sus elementos
let diasSemana = ["Domingo", "Lunes", "Martes", 
                "Miercoles", "Jueves", "Viernes", "Sabado"];
console.log("Dia 1 semana :", diasSemana[0]);
console.log("Dia 2 semana :", diasSemana[1]);
console.log("Dia 3 semana :", diasSemana[2]);
console.log("Dia 4 semana :", diasSemana[3]);
console.log("Dia 5 semana :", diasSemana[4]);
console.log("Dia 6 semana :", diasSemana[5]);
console.log("Dia 7 semana :", diasSemana[6]);
//ESCRITURA
let arregloSalarios = [1000000, 1800000, 3000000];
//cambiamos el salario de indice 1 por 2000000
arregloSalarios[1] = 2000000;
console.log("Elemento actualizado: ", arregloSalarios[1]);
console.log("--------------------");
console.log("Arreglo actualizado: ", arregloSalarios);
//uso de .push para agregar elementos a un arreglo
let arregloNombres181 = [];
//agregamos un elemento el cual ira al ultimo indice
arregloNombres181.push("Pedro");
arregloNombres181.push("Jacobo");
arregloNombres181.push("Javier");
arregloNombres181.push("Cristian");
arregloNombres181.push("Tatiana");
arregloNombres181.push("Daniel");
arregloNombres181.push("Zharick");
arregloNombres181.push("Julian");
arregloNombres181.push("Nicolas");
arregloNombres181.push("Santiago");
arregloNombres181.push("Jimena");
arregloNombres181.push("Danna");
console.log("Nombres ADSI 181: ", arregloNombres181);

//Investigar y aplicar .splice al siguiente arreglo para eliminar:
//el elemento de indice 4
//el elemento de indice 3
//el elemento de indice 5
//los siguientes 2 elementos a partir del indice 6
let arregloSplice = [23, 45, 76, 77, 23, 98, 76, 90, 67];
//arregloSplice.splice(4, 1); eliminamos el elemento de indice 4 unicamente
//arregloSplice.splice(3, 1);
//arregloSplice.splice(5, 1);
//arregloSplice.splice(6, 3);
console.log(arregloSplice);

//longitud de un arreglo
//longitud de un arreglo es la cantidad de elementos
//que tiene el arreglo, es un numero. para esto usamos .lenght
let arregloLongitud=[200, 5, 8, 45, 9, 0];
console.log("la longitud del arreglo es:  ", arregloLongitud.length);