// RONDA 1

// 1.- Realizar una función que reciba como parametro el nombre completo de un koder y retorne sus iniciales. Ejemplo:
// Input: 'Fernanda Palacios Vera'
// Output: F. P. V.
 
/* 
 const nameKoder=(nombreCompleto)=>{
    let cadena= nombreCompleto;
    let arrayCadena = cadena.split(" ")
    let onlyInitial = arrayCadena.map(letter => letter.charAt(0));
    let withPoint = (onlyInitial.join('. ')) + '.'
    return withPoint
}

console.log(nameKoder("Carolina Diana Carhuamanta Ibañez"))
*/

// 2.- Realizar una función que reciba n parametros de tipo string y validar por cada string cuantas vocales tiene y retornar el resultado en un objeto. Ejemplo:
// Input:
//    string1: 'Hola Mundo'
//    string2: 'Soy fullstack',
//    .
//    .
//    .

// Output: 
//    {
//      HolaMundo: 4,
//      fullstack: 3
//    }

/*
const getString=(...string)=>{

    const object = {}
    string.forEach(letter=>{
        let countVowels  = letter.match(/[aáeéiíoóuú]/gi).length
        object[letter.split(" ").join('')] = countVowels        
    })
    return object
}

console.log(getString("Carolina Diana","Hola Diana","Diana otra vez"))
*/


//RONDA 2

// 1.- Realizar las funciones que permitan calcular el área y circuferencia de un circulo recibiendo sus parametros respectivos. Nota: Ambas funciones deben estar en sus diferentes formas de declaración (arrow functions y function)

// arrow functions
/*
const calcCircle = radio =>{
    const area = (Math.PI*Math.pow(radio,2)).toFixed(2)
    const circunference = (2*Math.PI*radio).toFixed(2)
    let sentenceCircle = `El area del círculo es ${area} y su circunferencia es ${circunference}`
    return sentenceCircle
}
console.log( calcCircle(4))
*/

// function
/*
function calcCircle(radio){
    const area = (Math.PI*Math.pow(radio,2)).toFixed(2)
    const circunference = (2*Math.PI*radio).toFixed(2)
    let sentenceCircle = `El area del círculo es ${area} y su circunferencia es ${circunference}`
    return sentenceCircle
}
console.log( calcCircle(4))
*/

// 2.- Realizar un programa que permita al usuario seleccionar de un menu: suma, resta, multiplicación o división, el área o circunferencia de un Circulo e imprimir el resultado en consola. Nota: El programa debera ejecutarse al invocar una función.

let menu = parseInt(prompt("MENU\n"+
                            "1. Suma\n"+
                            "2. Resta\n"+
                            "3. Multiplicación\n"+
                            "4. División\n"+
                            "5. Area de un circulo\n"+
                            "6. Circunferencia de un circulo\n"+
                            "Ingrese una de estas opciones\n"));

let number1;
let number2;

const numbersOp = ()=>{
    number1 = parseInt(prompt("Ingresa el 1er número"))
    number2 = parseInt(prompt("Ingresa el 2do número"))
}

switch(menu){
    case 1:                                                                                                                                             
        let suma =()=>{
            numbersOp()
            const sumaNumber = number1 + number2
            return `El resultado es ${sumaNumber}`
        }
        console.log(suma())
        break;
    case 2:
        let resta =()=>{
            numbersOp()
            const restNumber = number1 - number2
            return `El resultado es ${restNumber}`
        }
        console.log(resta())    
        break;
    case 3:
        let multiplicacion =()=>{
            numbersOp()
            const xNumber = number1 * number2
            return `El resultado es ${xNumber}`
        }
        console.log(multiplicacion())       
        break;
    case 4:
        let division =()=>{
            numbersOp()
            const divNumber = number1 / number2
            return `El resultado es ${divNumber}`               
        }
        console.log(division())
        break;                  
    case 5:
        let areaCircle=()=>{
            let getradio= parseInt(prompt("Ingresa el radio"))
            const area = (Math.PI*Math.pow(getradio,2)).toFixed(2)
            return `El resultado es ${area}` 
        }
        console.log(areaCircle())
        break;
    case 6:
        let circunference=()=>{
            let getradio= parseInt(prompt("Ingresa el radio"))
            const circunf = (2*Math.PI*getradio).toFixed(2)
            return `El resultado es ${circunf}` 
        }
        console.log(circunference())
        break;
    default:
        alert("Opción Invalida")
        break
}