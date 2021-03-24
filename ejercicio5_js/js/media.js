// var phrase = "La mejor forma de predecir el futuro es creándolo"

/*
    Usando la frase "La mejor forma de predecir el futuro es creándolo" lograr los siguientes resultados:
    1.- Mostrar la misma frase en snake_case
    2.- Mostrar la misma frase en kebab-case
    3.- Mostrar la misma frase con todas las vocales en mayúscula
    4.- Mostrar los primeros 10 caracteres de la frase
    5.- Mostrar los últimos 10 caracteres de la frase 
*/

//1.-
// var phrase = "La mejor forma de predecir el futuro es creándolo"

// var replaceSnake_case = phrase.replace(/ /ig,"_");

// console.log(replaceSnake_case);

//2.-

// var phrase = "La mejor forma de predecir el futuro es creándolo"

// var replaceKebab_case = phrase.replace(/ /ig,"-");

// console.log(replaceKebab_case);

//3.-

// var phrase = "La mejor forma de predecir el futuro es creándolo"

// var vowelsToUpper_case = phrase.replace(/a|á|e|i|o|u/gi, function(x){return x.toUpperCase();});

// console.log(vowelsToUpper_case);

//4.-

// var phrase = "La mejor forma de predecir el futuro es creándolo"

// var replaceSin = phrase.replace(/ /ig,"");

// var section_10_firts = replaceSin.slice(0,10)

// console.log( section_10_firts );

//5.-

var phrase = "La mejor forma de predecir el futuro es creándolo"

var replaceSin = phrase.replace(/ /ig,"");

var section_10_last = replaceSin.slice(-10)

console.log(section_10_last);

