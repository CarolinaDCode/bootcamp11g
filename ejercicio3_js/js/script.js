// 1. Crear un script para calcular el IMC (Indice de masa corporal) de cualquier persona, y determinar la composición corporal de dicha persona bajo los siguientes criterios:
// Peso inferior al normal : IMC Menos de 18.5
// Normal  : IMC 18.5 – 24.9
// Peso superior al normal : IMC 25.0 – 29.9
// Obesidad : IMC Más de 30.0 


// var peso = parseFloat(prompt("Por favor, ingrese su peso"));
// var altura = parseFloat(prompt("Por favor, ingrese su altura"));

// var alturaAlCuadrado= Math.pow(altura,2)

// // var imc = peso/alturaAlCuadrado

// if(peso != 0 && altura != 0){
//     var imc = (peso/alturaAlCuadrado).toFixed(2);
    
//     if ( imc < 18.5){
//         alert("Su IMC es: " + imc + "\nSu peso es inferior al normal");
//     }else if( imc >= 18.5 && imc <= 24.9){
//         alert("Su IMC es: " + imc + "\nSu peso es esta dentro de lo normal");
//     }else if( imc > 25 & imc < 29.9 ){
//         alert("Su IMC es: " + imc + "\nSu peso es superior al normal");
//     }else { //Mayor que 30
//         alert("Su IMC es "  + imc + "\nUsted sufre de Obesidad");
//     }   
// }else{
//     alert("Por favor, introduzca un valor mayor que 0")
// } 

//  2. Usando como referencia los siguientes datos de estaturas promedio:

//             General Varón   Mujer
// México      169.9   170.0   160.8   cm's
// Australia   172.6   179.2   165.9   cm's
// Canadá      171.0   178.1   163.9   cm's
// Brasil      167.3   173.6   160.9   cm's
// Reino Unido 171.0   177.5   164.4   cm's
// crear un script que me permita conocer si mi estatura es superior, inferior o igual al promedio dependiendo de mi país y género. Si mi país no se encuentra en la lista, indicar que no se cuenta con el dato de estatura para ese país.


// var nombre = prompt("¿Cuál es tu Nombre?")

// var genero = prompt("¿Cuál es su género?")
// var pais = prompt("¿Cuál es su pais")
// var estatura = prompt("Por favor, indique su estatura")

// var mensaje="";

// switch (pais){
//     case "México":
//     case "mexico":
//     case "Mexico":
//     case "méxico":
//         switch (genero){
//             case "mujer":
//             case "Mujer":
//                 alert(mensaje = estatura >= 160.8 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//             case "Varón":
//             case "varon":
//             case "varón":
//                 alert(mensaje = estatura >= 170.0 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//             default:
//                 alert(mensaje = estatura >= 169.9 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//         }

//         break;
//     case "Australia":
//     case "australia":
//         switch (genero){
//             case "mujer":
//             case "Mujer":
//                 alert(mensaje = estatura >= 165.9 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//             case "Varón":
//             case "varon":
//             case "varón":
//                 alert(mensaje = estatura >= 179.2 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//             default:
//                 alert(mensaje = estatura >= 172.6 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//         }

//         break;
//     case "Canadá":
//     case "Canada":
//     case "canada":
//     case "canadá":
//         switch (genero){
//             case "mujer":
//             case "Mujer":
//                 alert(mensaje = estatura >= 163.9 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//             case "Varón":
//             case "varon":
//             case "varón":
//                 alert(mensaje = estatura >= 178.1 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//             default:
//                 alert(mensaje = estatura >= 171.0 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//         }

//     break;
//     case "Brasil":
//     case "brasil":
//         switch (genero){
//             case "mujer":
//             case "Mujer":
//                 alert(mensaje = estatura >= 160.9 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//             case "Varón":
//             case "varon":
//             case "varón":
//                 alert(mensaje = estatura >= 173.6 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//             default:
//                 alert(mensaje = estatura >= 167.3 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//         }

//     break;
//     case "Reino Unido":
//     case "reino unido":
//         switch (genero){
//             case "mujer":
//             case "Mujer":
//                 alert(mensaje = estatura >= 164.4 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//             case "Varón":
//             case "varon":
//             case "varón":
//                 alert(mensaje = estatura >= 177.5 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//             default:
//                 alert(mensaje = estatura >= 171.0 ? "Su estatura es Superior al promedio" : "Su estatura es inferior o igual al promedio");
//                 break;
//         }
    
//     break;
//     default:
//     alert("no se cuenta con el dato de estatura para ese país.");
//     break;
// }





// 3. Tomando como referencia los siguientes datos de densidades:
// Sustancia       Densidad (kg/m3)
// Acero           7850
// Cobre           8940
// Oro             19300
// Plata           10490
// Diamante        3515
// crear un script que me permita conocer el peso de un cubo de cualquier material (pedir al usuario la dimensión del lado del cubo y el material a consultar). Si el material no se encuentra en la lista, informar que no se cuentan con datos sobre la densidad de dicho material.

const ACERO = 7850;
const COBRE = 8940;
const ORO = 19300;
const PLATA = 10490;
const DIAMANTE = 3515;

var lado = parseFloat(prompt("Ingrese la dimensión del lado del cubo"));
var material = prompt("Ingrese el material a usar");

if (lado > 0) {
  var volumenCubo = Math.pow(lado, 3);
  var message;
  
  switch (material) {
    case "acero":
    case "Acero":
      densidad = volumenCubo * ACERO;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    case "cobre":
    case "Cobre":
      densidad = volumenCubo * COBRE;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    case "oro":
    case "Oro":
      densidad = volumenCubo * ORO;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    case "plata":
    case "Plata":
      densidad = volumenCubo * PLATA;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    case "diamante":
    case "Diamante":
      densidad = volumenCubo * DIAMANTE;
      message = "La densidad del cubo es: " + densidad;
      alert(message);
      break
    default:
      alert("No se encuentran los datos de ese material.");
      break;
  }
} else {
  alert("Ingrese un valor mayor a 0.")
}