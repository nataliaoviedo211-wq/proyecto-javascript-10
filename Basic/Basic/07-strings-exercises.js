/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let cadena1 = 'Hola'
let cadena2 = 'Mundo'
let concatenada = cadena1 + ' ' + cadena2
console.log(concatenada)
// 2. Muestra la longitud de una cadena de texto
let texto = 'JavaScript'
console.log(texto.length) // Mide cuántos caracteres tiene
// 3. Muestra el primer y último carácter de un string
let palabra = 'Programación'
let primerCaracter = palabra[0]
let ultimoCaracter = palabra[palabra.length - 1]

console.log('Primer carácter:', primerCaracter)
console.log('Último carácter:', ultimoCaracter)
// 4. Convierte a mayúsculas y minúsculas un string
let mensaje = 'Aprendiendo JavaScript'
console.log(mensaje.toUpperCase()) // Todo a mayúsculas
console.log(mensaje.toLowerCase()) // Todo a minúsculas
// 5. Crea una cadena de texto en varias líneas
let textoVariasLineas = `Esta es la primera línea
y esta es la segunda línea
utilizando template literals`
console.log(textoVariasLineas)
// 6. Interpola el valor de una variable en un string
let nombre = 'Natalia'
let edad = 16
let saludo = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`
console.log(saludo)
// 7. Reemplaza todos los espacios en blanco de un string por guiones
let frase = 'Me gusta programar en JavaScript'
let conGuiones = frase.replace(/ /g, '-')
console.log(conGuiones)
// 8. Comprueba si una cadena de texto contiene una palabra concreta
let oracion = 'Estoy aprendiendo desarrollo web'
let contiene = oracion.includes('desarrollo')
console.log(contiene) // true
// 9. Comprueba si dos strings son iguales
let str1 = 'Hola'
let str2 = 'Hola'
console.log(str1 === str2) // true
// 10. Comprueba si dos strings tienen la misma longitud
let textoA = 'Casa'
let textoB = 'Perro'
console.log(textoA.length === textoB.length) // false (4 === 5)
