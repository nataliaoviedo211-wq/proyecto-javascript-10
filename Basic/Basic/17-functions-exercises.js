/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
function sumar(a, b) {
 return a + b
}
console.log(sumar(5, 3))
// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
function obtenerMayor(numeros) {
 let mayor = numeros[0]
 for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > mayor) {
   mayor = numeros[i]
  }
 }
 return mayor
}
console.log(obtenerMayor([4, 9, 2, 15, 6]))
// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function contarVocales(texto) {
 let vocales = 'aeiouáéíóú'
 let contador = 0
 for (let i = 0; i < texto.length; i++) {
  if (vocales.includes(texto[i].toLowerCase())) {
   contador++
  }
 }
 return contador
}
console.log(contarVocales('JavaScript'))
// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
function convertirMayusculas(arrayStrings) {
 let resultado = []
 for (let i = 0; i < arrayStrings.length; i++) {
  resultado.push(arrayStrings[i].toUpperCase())
 }
 return resultado
}
console.log(convertirMayusculas(['hola', 'mundo', 'javascript']))
// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
function esPrimo(num) {
 if (num <= 1) return false
 for (let i = 2; i <= Math.sqrt(num); i++) {
  if (num % i === 0) return false
 }
 return true
}
console.log(esPrimo(7)) // true
console.log(esPrimo(4)) // false
// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
function elementosComunes(arr1, arr2) {
 let comunes = []
 for (let i = 0; i < arr1.length; i++) {
  if (arr2.includes(arr1[i]) && !comunes.includes(arr1[i])) {
   comunes.push(arr1[i])
  }
 }
 return comunes
}
console.log(elementosComunes([1, 2, 3, 4], [3, 4, 5, 6]))
// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
function sumarPares(numeros) {
 let suma = 0
 for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
   suma += numeros[i]
  }
 }
 return suma
}
console.log(sumarPares([1, 2, 3, 4, 5, 6])) // 12
// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
function elevarAlCuadrado(numeros) {
 let resultado = []
 for (let i = 0; i < numeros.length; i++) {
  resultado.push(numeros[i] ** 2)
 }
 return resultado
}
console.log(elevarAlCuadrado([2, 3, 4]))
// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
function invertirPalabras(texto) {
 let palabras = texto.split(' ')
 let palabrasInvertidas = palabras.reverse()
 return palabrasInvertidas.join(' ')
}
console.log(invertirPalabras('Hola mundo desde JavaScript'))
// 10. Crea una función que calcule el factorial de un número dado
function calcularFactorial(num) {
 let factorial = 1
 for (let i = 1; i <= num; i++) {
  factorial *= i
 }
 return factorial
}
console.log(calcularFactorial(5)) // 120 (5 * 4 * 3 * 2 * 1)
