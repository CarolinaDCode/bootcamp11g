/*
    -pedir al usuario la cantidad de koders a guardar
    -pedir nombre y apellido de cada koder
    -guardar cada koder en un array 
    -imprimir cada uno de los koders

*/
/*
    permitir guardar koders adicionales
    permitir borrar un koder aleatorio de la lista

*/

var koders = [];
var koderDelete = [];
var numDeKoders;

function quantKoder(){ //Guardar Koders
    
    var numDeKoders = prompt("¿Qué cantidad de Koders desea guardar?")

    for(let i=0; i<numDeKoders; i++){
        let userName= prompt("Ingresa su Nombre, por favor");
        let userLastName= prompt("Ingresa su Apellido, por favor");
        var nameComplet= userName + " " + userLastName
            koders.push(nameComplet);
    }
}
quantKoder()

function koder_aditional(){ //Adicionar Koder
    var koders_saveAditional = prompt("¿Desea Adicionar, algún Koder?")

        if( koders_saveAditional === "si"){

            var koders_saveAditional = prompt("¿Cuantos?")
            
            for(let i=0; i<koders_saveAditional; i++){
                let userName= prompt("Ingrese su Nombre, por favor");
                let userLastName= prompt("Ingresa su Apellido, por favor");
                var nameComplet2= userName + " " + userLastName
                    koders.push(nameComplet2);
            }
        }else{
            alert("Gracias");
        }
}
koder_aditional()

function delete_koder(){ //borrar Koder
    var koder_bye = prompt("Desea eliminar un Koder")

    if( koder_bye === "si"){

        koderDelete=koders.splice(Math.random()*(parseInt(numDeKoders)),1)
    }else{
        alert("Gracias");
    }
}
delete_koder()

console.log(koders)