/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let nombre = 'Natalia'

if (nombre === 'Natalia') {
 console.log('Natalia')
}
// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let usuarioIngresado = 'admin123'
let passwordIngresado = 'secreto'

let usuarioCorrecto = 'admin123'
let passwordCorrecto = 'secreto'

if (
 usuarioIngresado === usuarioCorrecto &&
 passwordIngresado === passwordCorrecto
) {
 console.log('¡Acceso concedido! Bienvenido.')
} else {
 console.log('Usuario o contraseña incorrectos.')
}
// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let numero = -5

if (numero > 0) {
 console.log('El número es positivo.')
} else if (numero < 0) {
 console.log('El número es negativo.')
} else {
 console.log('El número es cero.')
}
// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let edad = 15
let edadMinima = 18

if (edad >= edadMinima) {
 console.log('Puedes votar.')
} else {
 let faltantes = edadMinima - edad
 console.log(`No puedes votar. Te faltan ${faltantes} años.`)
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let edadPersona = 20
let tipoPersona = edadPersona >= 18 ? 'adulto' : 'menor'
console.log(tipoPersona)
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 'Agosto'

if (mes === 'Diciembre' || mes === 'Enero' || mes === 'Febrero') {
 console.log('Invierno (o temporada de lluvias dependiendo de la región).')
} else if (mes === 'Marzo' || mes === 'Abril' || mes === 'Mayo') {
 console.log('Primavera')
} else if (mes === 'Junio' || mes === 'Julio' || mes === 'Agosto') {
 console.log('Verano')
} else if (mes === 'Septiembre' || mes === 'Octubre' || mes === 'Noviembre') {
 console.log('Otoño')
} else {
 console.log('Mes no válido.')
}
// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let mesDias = 'Agosto'

if (mesDias === 'Febrero') {
 console.log('Tiene 28 o 29 días.')
} else if (
 mesDias === 'Abril' ||
 mesDias === 'Junio' ||
 mesDias === 'Septiembre' ||
 mesDias === 'Noviembre'
) {
 console.log('Tiene 30 días.')
} else if (
 mesDias === 'Enero' ||
 mesDias === 'Marzo' ||
 mesDias === 'Mayo' ||
 mesDias === 'Julio' ||
 mesDias === 'Agosto' ||
 mesDias === 'Octubre' ||
 mesDias === 'Diciembre'
) {
 console.log('Tiene 31 días.')
} else {
 console.log('Mes no válido.')
}
// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = 'es' // Puedes probar con "en", "fr", etc.

switch (idioma) {
 case 'es':
  console.log('¡Hola!')
  break
 case 'en':
  console.log('Hello!')
  break
 case 'fr':
  console.log('Bonjour!')
  break
 default:
  console.log('Idioma no reconocido.')
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6
let mesSwitch = 'Agosto'

switch (mesSwitch) {
 case 'Diciembre':
 case 'Enero':
 case 'Febrero':
  console.log('Invierno')
  break
 case 'Marzo':
 case 'Abril':
 case 'Mayo':
  console.log('Primavera')
  break
 case 'Junio':
 case 'Julio':
 case 'Agosto':
  console.log('Verano')
  break
 case 'Septiembre':
 case 'Octubre':
 case 'Noviembre':
  console.log('Otoño')
  break
 default:
  console.log('Mes no válido')
}
// 10. Usa un switch para hacer de nuevo el ejercicio 7
let mesDiasSwitch = 'Agosto'

switch (mesDiasSwitch) {
 case 'Febrero':
  console.log('Tiene 28 o 29 días')
  break
 case 'Abril':
 case 'Junio':
 case 'Septiembre':
 case 'Noviembre':
  console.log('Tiene 30 días')
  break
 case 'Enero':
 case 'Marzo':
 case 'Mayo':
 case 'Julio':
 case 'Agosto':
 case 'Octubre':
 case 'Diciembre':
  console.log('Tiene 31 días')
  break
 default:
  console.log('Mes no válido')
}
