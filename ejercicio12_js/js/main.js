// Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
// Obtener la edad a partir de la fecha de nacimiento
// Obtener promedio de sus scores
// Colección de Koder que pertenezcan a JavaScript
// Colección de Koder que pertenezcan a Python

const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {    
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {    
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {    
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {   
         name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]


function Koder(name, lastName, birthDate, generation, bootcamp, school, scores) {
    this.name = name;
    this.lastName = lastName;
    this.generation = generation;
    this.birthDate = birthDate;
    this.bootcamp = bootcamp;
    this.school ='Kodemia';
    this.scores = scores;
    this.greet = function() {
        console.log(`Hola Mi nombre es ${this.name} y soy de la generación ${this.generation}º de ${this.bootcamp}`)
    }
    this.asking = function(question, mentor) {
        console.log(`${mentor} tengo duda sobre: ${question}`)
    }
    this.getAge = function(){
        let today = new Date();
        let birthDate = new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }
    this.getAvg = function(){
        const sumaScores = this.scores.reduce((accum,current)=>{
            return accum += current.score
        },0)
        const promedio = sumaScores / this.scores.length 
        return promedio
    }
}

// instanciar

// const koderDiana = new Koder('Diana', 'Ibañez', 11, '1992/06/03', 'Peru', 'JavaScript', 'KoderHause')
// const koderTaquito = new Koder('Vero', 'Paredes', 11, '1992/06/03', 'Mexico', 'JavaScript')

// const koderArray = [];

// kodersCollection.forEach((current,index)=>{
//      let koder = new Koder(current.name, current.lastName,current.birthday,current.generation,current.bootcamp, current.scores);
//      koderArray.push(koder)
// })

// console.log(koderArray)


const koder2 = kodersCollection.map((current,index)=> new Koder(current.name, current.lastName,current.birthday,current.generation,current.bootcamp, current.scores))
// console.log(koder2)
let koderJavaScript = koder2.filter(current=>current.bootcamp === 'JavaScript')
console.log(koderJavaScript)

let koderPhyton = koder2.filter(current=>current.bootcamp === 'Python')
console.log(koderPhyton)

//otra forma con if

let koderJSif = koder2.filter((current)=>{
    if(current.bootcamp === 'JavaScript') return  current
})
console.log(koderJSif)
// console.log(koderDiana)
// console.log(koderTaquito)