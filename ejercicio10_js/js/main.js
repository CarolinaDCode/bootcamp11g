let mentorsArray = [
    {
        name:"Israel Salinas Martinez",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:8
            },
            {
                signature:"ReactJS",
                score:8
            }
        ]
    },
    {
        name:"David Cermeño Moranchel",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:7
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    },
    {
        name:"Charles Silva",
        scores:[
            {
                signature:"HTML",
                score:9
            },
            {
                signature:"CSS",
                score:9
            },
            {
                signature:"JS",
                score:10
            },
            {
                signature:"ReactJS",
                score:9
            }
        ]
    },
    {
        name:"Michael Villalba Sotelo",
        scores:[
            {
                signature:"HTML",
                score:8
            },
            {
                signature:"CSS",
                score:10
            },
            {
                signature:"JS",
                score:9
            },
            {
                signature:"ReactJS",
                score:10
            }
        ]
    }
]

// usando mentorsArray, realizar lo siguiente:
// 1.- Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
// 2.- Obtener el promedio individual de cada mentor
// 3.- Obtener un array de strings con la siguiente forma:
//      "Mi nombre es {nombre} y mi promedio es de {promedio}"
// 4.-Obtener la lista de mentores cuyo promedio sea mayor a 9.5


//1.-
//--Seudocodigo
//      1 Guardar en otra variable la lista del score de cada materia
//      1 Calcular el promodio recorriendo la lista del Score de cada Materia.
//      3 sumarlos y dividirlo entre la cantidad de indices de su array.


// 1.- Obtener el score promedio de cada materia( HTML, CSS, JS, ReactJS )
    
const calcPromedio = materia => {
    let totalMateria = mentorsArray.reduce((accum, current)=>{
        // console.log('current',current)
        // console.log('current', current.scores)
    let puntuacionMateria = current.scores.find(score => score.signature === materia).score
        // console.log(puntuacionMateria)
        return accum + puntuacionMateria
    },0)
    // console.log('totalMateria',totalMateria)
    let promedioTotal = totalMateria / mentorsArray.length
    return promedioTotal
}

let promedioHtml = calcPromedio("HTML")
console.log(promedioHtml)

let promedioCss = calcPromedio("CSS")
console.log(promedioCss)

let promedioJs = calcPromedio("JS")
console.log(promedioJs)

let promedioReactJS = calcPromedio("ReactJS")
console.log(promedioReactJS)

// 2.- Obtener el promedio individual de cada mentor

const promedioMentor = (mentorName) => {
    //  let selectedMentor = mentorsArray.filter( mentor => mentor.name === mentorName)
    //  console.log (selectedMentor)
    //  let mentorsScores = selectedMentor[0].scores
    //  console.log(mentorsScores)
    let mentorsScores = mentorsArray.find( mentor => mentor.name === mentorName).scores
    // console.log(mentorsScores)
    let promedioMentorOk = mentorsScores.reduce((accum, current)=>{
        return accum + current.score
    },0)/mentorsScores.length
    // console.log("Promedio de Mentor: ", promedioMentorOk)
    return promedioMentorOk
}
promedioMentor("Israel Salinas Martinez")
promedioMentor("David Cermeño Moranchel")
promedioMentor("Charles Silva")
promedioMentor("Michael Villalba Sotelo")

// 3.- Obtener un array de strings con la siguiente forma:
//      "Mi nombre es {nombre} y mi promedio es de {promedio}"

const getStringMentor = () =>{
    let labelsArray = mentorsArray.map(mentor =>{
        return `Hola, soy ${mentor.name} y mi promedio es de ${promedioMentor(mentor.name)}`
    })
    // return labelsArray
    console.log(labelsArray)
}

getStringMentor()

// 4.-Obtener la lista de mentores cuyo promedio sea mayor a 9

const mejorMentor = () =>{
    let result = mentorsArray.filter(mentor => {
        return promedioMentor(mentor.name) > 9
    })
    console.log(result)
}

mejorMentor()