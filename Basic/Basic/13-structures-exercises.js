/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales
let animales = ['perro', 'gato', 'león', 'tigre', 'elefante']
console.log(animales)
// 2. Añade dos más. Uno al principio y otro al final
animales.unshift('leopardo') // Añade al principio
animales.push('cebra') // Añade al final
console.log(animales)
// 3. Elimina el que se encuentra en tercera posición
animales.splice(2, 1) // Elimina 1 elemento a partir del índice 2
console.log(animales)
// 4. Crea un set que almacene cinco libros
let libros = new Set([
 'Cien años de soledad',
 'Don Quijote',
 'El Principito',
 '1984',
 'Fahrenheit 451',
])
console.log(libros)
// 5. Añade dos más. Uno de ellos repetido
libros.add('Crimen y castigo')
libros.add('Cien años de soledad') // Como es un Set, los elementos duplicados se ignoran
console.log(libros)
// 6. Elimina uno concreto a tu elección
libros.delete('1984')
console.log(libros)
// 7. Crea un mapa que asocie el número del mes a su nombre
let meses = new Map([
 [1, 'Enero'],
 [2, 'Febrero'],
 [3, 'Marzo'],
 [4, 'Abril'],
 [5, 'Mayo'],
 [6, 'Junio'],
 [7, 'Julio'],
 [8, 'Agosto'],
 [9, 'Septiembre'],
 [10, 'Octubre'],
 [11, 'Noviembre'],
 [12, 'Diciembre'],
])
console.log(meses)
// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (meses.has(5)) {
 console.log(meses.get(5)) // Imprimirá "Mayo"
}
// 9. Añade al mapa una clave con un array que almacene los meses de verano
meses.set('verano', ['Junio', 'Julio', 'Agosto'])
console.log(meses)
// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let arrayOriginal = [1, 2, 2, 3, 4, 4, 5]
let miSet = new Set(arrayOriginal) // Elimina los duplicados automáticamente

let miMapa = new Map()
miMapa.set('unSet', miSet)

console.log(miMapa)
console.log(miMapa.get('unSet'))
