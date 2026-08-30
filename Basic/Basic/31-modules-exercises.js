/*
Clase 45 - Ejercicios: Módulos
Vídeo: https://youtu.be/1glVfFxj8a4?t=22720
*/

// 1. Exporta una función
export function saludar(nombre) {
 console.log(`¡Hola, ${nombre}!`)
}
// 2. Exporta una constante
export const MAYORIA_DE_EDAD = 18
// 3. Exporta una clase
export class Persona {
 constructor(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
 }
}
// 4. Importa una función
import { saludar } from './mis-datos.js'

// Ejemplo de uso:
saludar('Natalia')
// 5. Importa una constante
import { MAYORIA_DE_EDAD } from './mis-datos.js'

// Ejemplo de uso:
console.log(MAYORIA_DE_EDAD)
// 6. Importa una clase
import { Persona } from './mis-datos.js'

// Ejemplo de uso:
let p = new Persona('Natalia', 16)
console.log(p.nombre)
// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
const miConstanteDefecto = 100
function miFuncionDefecto() {
 return 'Función por defecto'
}
class MiClaseDefecto {}

// Exportamos un solo objeto por defecto que contiene las tres cosas
export default {
 miConstanteDefecto,
 miFuncionDefecto,
 MiClaseDefecto,
}
// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import misDatosPorDefecto from './otro-archivo.js'

// Para usarlos accederías al objeto:
// misDatosPorDefecto.miConstanteDefecto;
// 9. Exporta una función, una constante y una clase desde una carpeta
export function sumar(a, b) {
 return a + b
}
export const PI = 3.14159
export class Calculadora {}
// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior
import { sumar, PI, Calculadora } from '../utils/helpers.js'
