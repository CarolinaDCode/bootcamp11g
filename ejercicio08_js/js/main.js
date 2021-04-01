var kodersList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]

/*
    -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList

    newArray = [
        "Fernanda Palacios Vera",
        "Naomi Puertos"
        ...
    ]

*/

const createNewArray = () => {
  let newArray = []
  for( i = 0; i < kodersList.length; i++){
    newArray.push( kodersList[i].join(" "))
  }
  return newArray
}

var joinedNames = createNewArray()

// console.log( joinedNames )




/*
  Ingresar un nombre
  validar si existe algún koder cuyo primer nombre coincida con el nombre escrito
*/

const validName=()=>{
    var nombreKoder=prompt("Ingrese en nombre del Koder que esta buscando");
    
    for( i=0; 0<joinedNames.length; i++){
        let firstName = joinedNames[i].split(" ")[0]
        // console.log(firstName)
         firstName === nombreKoder && console.log("El nombre si existe")
         //Esto es para que solo exista una unica respuesta si el nombre existe, imprimirá si existe, sino nada

        // firstName === nombreKoder ? console.log("El nombre si existe") : console.log("El nombre no existe")
        // if(nombreKoder === newArray.indexOf(nombreKoder); 
    }
}


validName()






