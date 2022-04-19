
var numero1 = 2;
var numero2 = 4;
// decrementa en 1 //
numero1--;
/* muestra resultado por consola del resultado */
/* el + con texto concatena */
//console.log("resultado:" + (numero1 * numero2));//
/* declaro booleano y hago comparacion */
var controledad = false;
var edad = 20
//controledad = edad > 18 && edad < 100;//
// console.log(controledad);//
//console.log(typeof edad);//
// estructuras condicionales //
if(edad > 18 && edad < 100) {
    controledad = true;
} else{
    controledad = false;
}
console.log(controledad);
/*
var number = 0;
while (number < 10) {
    console.log(number);
    number++;
}
for (let index = 0; index < 10; index++) {
    console.log("2 x " + index + " = " + (2*index));
    
}
*/
// funciones
function saludar (params) {
    console.log("te saludo");
}
// llamar a la funcion
saludar();


// funcion con pedido de datos
function pepito(nombre) {
    console.log("hola " + nombre);
}
var namea = prompt ("ingrese nombre");
pepito(namea);




