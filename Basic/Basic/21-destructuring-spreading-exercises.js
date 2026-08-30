/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let numeros = [10, 20, 30, 40]
let [primero, segundo] = numeros

console.log(primero) // 10
console.log(segundo) // 20
// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let colores = ['Rojo']
let [color1, color2 = 'Azul'] = colores

console.log(color1) // Rojo
console.log(color2) // Azul (valor por defecto ya que no existía en el array)
// 3. Usa desestructuración para extraer dos propiedades de un objeto
let persona = {
 nombre: 'Natalia',
 edad: 16,
 ciudad: 'Piedecuesta',
}
let { nombre, edad } = persona

console.log(nombre) // Natalia
console.log(edad) // 16
// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
let auto = {
 marca: 'Toyota',
 modelo: 'Corolla',
}
let { marca: marcaAuto, modelo: modeloAuto } = auto

console.log(marcaAuto) // Toyota
console.log(modeloAuto) // Corolla
// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
let usuario = {
 id: 1,
 info: {
  usuarioRed: 'nat_dev',
  activo: true,
 },
}
let {
 info: { usuarioRed, activo },
} = usuario

console.log(usuarioRed) // nat_dev
console.log(activo) // true
// 6. Usa propagación para combinar dos arrays en uno nuevo
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combinado = [...array1, ...array2]

console.log(combinado) // [1, 2, 3, 4, 5, 6]
// 7. Usa propagación para crear una copia de un array
let original = ['a', 'b', 'c']
let copia = [...original]

console.log(copia) // ["a", "b", "c"]
// 8. Usa propagación para combinar dos objetos en uno nuevo
let datosBasicos = { nombre: 'Natalia', edad: 16 }
let datosExtra = { profesion: 'Programadora', pais: 'Colombia' }
let objetoCombinado = { ...datosBasicos, ...datosExtra }

console.log(objetoCombinado)
// 9. Usa propagación para crear una copia de un objeto
let objetoOriginal = { x: 10, y: 20 }
let copiaObjeto = { ...objetoOriginal }

console.log(copiaObjeto) // { x: 10, y: 20 }
// 10. Combina desestructuración y propagación
let numerosCompletos = [1, 2, 3, 4, 5]
let [primeroNum, segundoNum, ...restoNumeros] = numerosCompletos

console.log(primeroNum) // 1
console.log(segundoNum) // 2
console.log(restoNumeros) // [3, 4, 5]
