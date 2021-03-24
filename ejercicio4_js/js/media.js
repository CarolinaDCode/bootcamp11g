// var phrase = "La mejor forma de predecir el futuro es creándolo"

// 1.- saber la cantidad de palabras
// 2.- saber la cantidad de "a"
// 3.- crear una nueva frase usando sólo los caracteres que esten en posiciones nones "amjrf"
// 4.- crear una nueva frase usando sólo los caracteres que esten en posiciones pares


//1.-
// var phrase = "La mejor forma de predecir el futuro es creándolo"
// var quantWords = phrase.split(" ");
// var quant = quantWords.length;
// console.log(quant);

//2.-
// var phrase = "La mejor forma de predecir el futuro es creándolo"

// var quantA = phrase.match(/[AaÁá]/g);
// console.log( quantA )

//3.-índices impares

// var phrase = "La mejor forma de predecir el futuro es creándolo"

// var lengthOk = phrase.length;

// var newPhraseOdd = ""; 

// for ( var i = 0; i <= lengthOk; i++){
//     if (i%2 !=1 ) {newPhraseOdd += phrase.charAt(i)}
// };

// console.log(newPhraseOdd)

//4.-índices pares

// var phrase = "La mejor forma de predecir el futuro es creándolo"

// var lengthOk = phrase.length;

// var newPhrasePair=""; 

// for ( var i = 1; i <= lengthOk; i++){
//     if (i % 2 == 1) {newPhrasePair += phrase.charAt(i)}
// };

// console.log(newPhrasePair)
 
