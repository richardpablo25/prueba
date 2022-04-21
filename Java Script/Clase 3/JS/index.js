//definicion de una variable
var nombre ="Pablo";

// el nomrbe de las constantes debe ir en mayuscula
const MES = "Diciembre";

// para mostrar por consola
// el + concatena 
console.log("mi nombre es " + nombre + " el mes es " + MES);

// puedo modifica una variable y va a mostrar el nuevo valor
nombre ="PEPE";
console.log("mi nombre es " + nombre + " el mes es " + MES);

//funciones  los nombres van con camel case

function saludar (name){
    console.log("Hola "+  name);
}
//para ejecutar la funcion:
//le paso la variable definida arriba
saludar(nombre);

//Callback
/*function calcularSiEsMayor() {
    var edad = 12;
    
    function esMayor (edad){
    if (edad >=18){
        console.log("es mayor");
        } else {

        }
}
}
*/

// Arrays

var dias = ["lunes", "martes"];
//muestro todo el array
console.table(dias);
//muestro 1 elemento de array
console.log(dias[1]);






