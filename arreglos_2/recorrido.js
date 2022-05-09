//RECORRIDO ANIDADO Y DIMENSION
//LA DIMENSION DE UN ARREGLO SE PUEDE DEFINIR
//DE ACUERDO AL NUMERO DE INDICES USADOS PARA 
//ACCEDER AL ELEMENTO MAS INTERIOR:
let arreglo1 = [ [2, 5], [3, 5, 9] ];
//ACA LOS ELEMENTOS MAS INTERNOS REQUIEREN DE
//DOS INDICES PARA ACCEDER A ELLOS, POR LO TANTO
//EL ARREGLO ES DIMENSION 2
//PARA ACCERDER AL ELEMENTO "9", usamos dos indices
console.log("Elemento 9 :", arreglo1[1][2]);
//ANIDAMIENTO : SE MIRA LA DIMENSION DEL ARREGLO,
//SI ES DE DIMENSION DOS SE USAN DOS CICLOS FOR,
//SI ES DE DIMENSION 3 SE USAN 3 CICLOS FOR...
//EN ESTE CASO arreglo1 ES DE DIMENSION 2, necesitamos dos
//ciclos for:
console.log("-----------------------");
for (let i = 0; i < arreglo1.length; i++){
    for (let j = 0; j < arreglo1[i].length; j++){
        console.log(arreglo1[i][j]);
    }
}

