ang1=parseFloat(prompt("ingrese el primer angulo"));
ang2=parseFloat(prompt("ingrese el segundo angulo"));
ang3=parseFloat(prompt("ingrese el tercer angulo"));
function triangulo(a,b,c) {
   if (a+b+c==180){
    console.log("es un triangulo");

   }
   else{
    console.log("no es un triangulo");
}
     return a,b,c;
    
   }
let tiangul= triangulo(ang1,ang2,ang3);

