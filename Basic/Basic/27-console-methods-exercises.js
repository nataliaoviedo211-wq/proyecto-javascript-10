/*
Clase 43 - Ejercicios: Console
Vídeo: https://youtu.be/1glVfFxj8a4?t=21421
*/

// 1. Crea un función que utilice error correctamente
function mostrarError() {
 console.error('¡Este es un mensaje de error crítico!')
}
mostrarError()
// 2. Crea una función que utilice warn correctamente
function mostrarAdvertencia() {
 console.warn('¡Advertencia: Esta acción podría ser peligrosa!')
}
mostrarAdvertencia()
// 3. Crea una función que utilice info correctamente
function mostrarInformacion() {
 console.info('Información del sistema: Operación completada con éxito.')
}
mostrarInformacion()
// 4. Utiliza table
let usuarios = [
 { nombre: 'Natalia', edad: 16, rol: 'Estudiante' },
 { nombre: 'Carlos', edad: 20, rol: 'Desarrollador' },
 { nombre: 'Ana', edad: 25, rol: 'Diseñadora' },
]
console.table(usuarios)
// 5. Utiliza group
console.group('Detalles del usuario')
console.log('Nombre: Natalia')
console.log('Edad: 16')
console.log('Ciudad: Bucaramanga')
console.groupEnd()
// 6. Utiliza time
console.time('Tiempo de ejecución')

// Simulamos un proceso con un bucle
for (let i = 0; i < 1000000; i++) {}

console.timeEnd('Tiempo de ejecución')
// 7. Valida con assert si un número es positivo
let numero = -5
console.assert(numero > 0, 'El número no es positivo: ' + numero)
// 8. Utiliza count
function contarLlamadas() {
 console.count('Esta función ha sido llamada')
}

contarLlamadas()
contarLlamadas()
contarLlamadas()
// 9. Utiliza trace
function funcionC() {
 console.trace('Traza de la pila de ejecución')
}
function funcionB() {
 funcionC()
}
function funcionA() {
 funcionB()
}

funcionA() // Muestra el recorrido de llamadas de las funciones
// 10. Utiliza clear
// Limpia la consola (en el navegador o en la terminal de Node)
console.clear()
console.log('La consola ha sido limpiada.')
