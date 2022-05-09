let edad=parseInt(prompt("ingrese su edad"));
function mayormenor(e) {
    if (e>= 18) {
      console.log("es mayor de edad");
    }
    else{
        console.log("es menor de edad");
    }
    return e;
}
let mom= mayormenor(edad);
