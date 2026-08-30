/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea
// Este es un comentario en una sola línea
// 2. Escribe un comentario en varias líneas
/* Este es un comentario 
   que ocupa varias 
   líneas */
// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let miString = 'Hola, JavaScript'
let miNumber = 2026
let miBoolean = true
let miUndefined = undefined
let miNull = null
let miSymbol = Symbol('miSimbolo')
let miBigInt = 9007199254740991n
// 4. Imprime por consola el valor de todas las variables
console.log(miString)
console.log(miNumber)
console.log(miBoolean)
console.log(miUndefined)
console.log(miNull)
console.log(miSymbol)
console.log(miBigInt)
// 5. Imprime por consola el tipo de todas las variables
console.log(typeof miString)
console.log(typeof miNumber)
console.log(typeof miBoolean)
console.log(typeof miUndefined)
console.log(typeof miNull)
console.log(typeof miSymbol)
console.log(typeof miBigInt)
// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
miString = 'Aprendiendo programación'
miNumber = 500
miBoolean = false
miUndefined = undefined
miNull = null
miSymbol = Symbol('nuevoSimbolo')
miBigInt = 123456789n
// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
miString = 42 // Cambió de string a number
miNumber = 'Texto' // Cambió de number a string
miBoolean = 0 // Cambió de boolean a number
miUndefined = 'Indefinido' // Cambió de undefined a string
miNull = false // Cambió de null a boolean
miSymbol = 100 // Cambió de symbol a number
miBigInt = 'Gran número' // Cambió de bigint a string
// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const cString = 'Cadena constante'
const cNumber = 7
const cBoolean = false
const cUndefined = undefined
const cNull = null
const cSymbol = Symbol('constSimbolo')
const cBigInt = 999n
// 9. A continuación, modifica los valores de las constantes
// Las constantes no se pueden reasignar. Si intentas hacer esto, romperá el código:
// cString = "Nuevo valor";
// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
/* 
   Intentar modificar el valor de una constante genera un TypeError 
   (Assignment to constant variable). Por lo tanto, debe dejarse comentado:
*/
// cString = "Intentando cambiar constante";
