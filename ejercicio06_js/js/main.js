
// Crear un funcion que pida al usuario el numero de koders a registrar

// -tantas veces como koders se deseen registrar:
// -pedir el nombre del koder
// -pedir el apellido del koder
// -imprimir el nombre completo del koder


function registroDKoders(){
    var numKoders = prompt("Escriba la cantidad de Koders que desea registrar");

    for(let i=0; i<numKoders; i++){
        let userName= prompt("Ingresa tu Nombre, por favor");
        let userLastName= prompt("Ingresa tu Apellido, por favor");
        var nameComplet= userName + " " + userLastName
        console.log(nameComplet)

    }
}


registroDKoders();