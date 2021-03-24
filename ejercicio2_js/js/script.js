// 1 - Crear un script que reciba la dimensión de los 3 lados de un triángulo, y con base en la información recibida, determine si el triángulo en cuestión es equilátero, isóceles o escaleno. Informar el resultado mediante un alert.
// 2 - Crear un script para recibir 2 de los lados de un cuadrilátero, y determinar si es un cuadrado o un rectángulo. Informar el resultado mediante un alert
// 2.1 - Calcular el área del cuadrilátero en cuestión, e informarla a través de un alert
// 3 - Crear un script que pida los datos necesarios para calcular el área de un triángulo, calcular el área y entregar el resultado mediante un alert.

//Ejercicio 1

// var sideA = parseInt(prompt("Ingresa el lado 1: "));
// var sideB = parseInt(prompt("Ingresa el lado 2: "));
// var sideC = parseInt(prompt("Ingresa el lado 3: "));




// if (!Number.isNaN(sideA) && !Number.isNaN(sideB) && !Number.isNaN(sideC)) {//si existe la variable
//   if (sideA != 0 && sideB != 0 && sideC != 0) {
//     if ((sideA == sideB) && (sideB == sideC)) {
//       area = (sideA + sideB + sideC) / 2;
//       alert("El triángulo es Equilátero");
//     } else {
//       if ((sideA == sideB) || (sideA == sideC) || (sideB == sideC)) {
//         alert("El triángulo es Isósceles y su área es: " );
//       } else {
//         alert("El triángulo es Escaleno");
//       }
//     }
//   }
// } else {
//   alert("Escribe un valor numérico");
// }


/*2do ejercicio y 2.1*/


// var sideA = parseInt(prompt("Ingresa el lado 1: "));
// var sideB = parseInt(prompt("Ingresa el lado 2: "));

// if (!Number.isNaN(sideA) && !Number.isNaN(sideB)) { //si existe la variable
//   var area = sideA * sideB;
//   if (sideA == sideB) {
//     alert("Es un cuadrado y su área es: " + area);
//   } else {
//     alert("Es un rectángulo y su área es: " + area);}
// }else {
//   alert("Escribe un valor numérico");
// }



/*Ejercicio 3*/

var base = parseInt(prompt("Ingresa la base del triángulo: "));
var height = parseInt(prompt("Ingresa la altura del triángulo: "));
var area = 0;

if (!Number.isNaN(base) && !Number.isNaN(height)) {
  if (base != 0 && height != 0) {
    area = base * height / 2;
    alert("El área del triángulo es: " + area);
  } else {
    alert("No se aceptan valores de 0");
  }  
} else {
  alert("");
}