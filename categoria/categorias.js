let categoria=prompt("ingrese su categoria");
let salario=parseFloat(prompt("ingrse su salario"));
switch (categoria) {
    case "1":
        console.log("su salario aumento un 15% \n", salario*1.15);
        break;

    case "2":
        console.log("su salario aumento un 25% \n", salario*1.25);
        break;

    case "3":
        console.log("su salario aumento un 45% \n", salario*1.45);
        break;
    default:
        console.log("ingrese una categoria entre 1-3");
        break;
}