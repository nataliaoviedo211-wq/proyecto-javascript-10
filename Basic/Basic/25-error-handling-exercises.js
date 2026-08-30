/*
Clase 41 - Ejercicios: Manejo de errores
Vídeo: https://youtu.be/1glVfFxj8a4?t=20392
*/

// 1. Captura una excepción utilizando try-catch
try {
 // Intentamos acceder a una propiedad de algo que es undefined (esto genera un error)
 let obj = undefined
 console.log(obj.propiedad)
} catch (error) {
 console.log('¡Se ha capturado un error!', error.message)
}
// 2. Captura una excepción utilizando try-catch y finally
try {
 let resultado = 10 / 0 // En JS no lanza error por división entre cero, pero podemos simularlo o forzarlo
 throwのだ // O lanzar un error a propósito
} catch (error) {
 console.log('Error capturado:', error.message)
} finally {
 console.log('Este bloque finally se ejecuta siempre, ocurra o no un error.')
}
// 3. Lanza una excepción genérica
try {
 throw new Error('Este es un error genérico creado a propósito.')
} catch (error) {
 console.log(error.message)
}
// 4. Crea una excepción personalizada
class ValidationError extends Error {
 constructor(message) {
  super(message)
  this.name = 'ValidationError'
 }
}
// 5. Lanza una excepción personalizada
try {
 let edad = 15
 if (edad < 18) {
  throw new ValidationError('La edad debe ser mayor o igual a 18 años.')
 }
} catch (error) {
 console.log(`${error.name}: ${error.message}`)
}
// 6. Lanza varias excepciones según una lógica definida
function validarNumero(num) {
 if (typeof num !== 'number') {
  throw new TypeError('El valor debe ser un número.')
 }
 if (num < 0) {
  throw new RangeError('El número no puede ser negativo.')
 }
 return 'Número válido'
}

try {
 validarNumero(-5)
} catch (error) {
 console.log(error.message)
}
// 7. Captura varias excepciones en un mismo try-catch
try {
 // Puedes evaluar diferentes condiciones que lancen errores de distintos tipos
 let tipoDato = 'texto'
 if (typeof tipoDato === 'string') {
  throw new TypeError('Error de tipo: Se esperaba un número.')
 }
} catch (error) {
 if (error instanceof TypeError) {
  console.log('Capturado un TypeError:', error.message)
 } else if (error instanceof RangeError) {
  console.log('Capturado un RangeError:', error.message)
 } else {
  console.log('Error desconocido:', error.message)
 }
}
// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
let valores = ['10.5', 'abc', '23.4', 'xyz', '99.9']

for (let i = 0; i < valores.length; i++) {
 try {
  let numeroConvertido = parseFloat(valores[i])
  if (Number.isNaN(numeroConvertido)) {
   throw new Error(`No se pudo convertir '${valores[i]}' a float.`)
  }
  console.log('Valor convertido:', numeroConvertido)
 } catch (error) {
  console.log('Capturado:', error.message)
 }
}
// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
class MissingPropertyError extends Error {
 constructor(message) {
  super(message)
  this.name = 'MissingPropertyError'
 }
}

function verificarPropiedad(obj, propiedad) {
 if (!obj.hasOwnProperty(propiedad)) {
  throw new MissingPropertyError(
   `La propiedad '${propiedad}' no existe en el objeto.`,
  )
 }
 return 'Propiedad encontrada'
}

try {
 let usuario = { nombre: 'Natalia' }
 console.log(verificarPropiedad(usuario, 'edad'))
} catch (error) {
 console.log(`${error.name}: ${error.message}`)
}
// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10
function operacionConReintentos() {
 let intentos = 0
 let maxReintentos = 10

 while (intentos < maxReintentos) {
  try {
   intentos++
   // Simulamos que la operación falla aleatoriamente o siempre hasta el último intento
   if (intentos < 5) {
    throw new Error(`Fallo en el intento ${intentos}`)
   }
   return `¡Operación exitosa en el intento ${intentos}!`
  } catch (error) {
   console.log(error.message)
   if (intentos === maxReintentos) {
    throw new Error('Se han agotado todos los reintentos máximos (10).')
   }
  }
 }
}

try {
 console.log(operacionConReintentos())
} catch (error) {
 console.log('Error final:', error.message)
}
