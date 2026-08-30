/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let persona = {
 nombre: 'Natalia',
 edad: 16,
 ocupacion: 'Estudiante',
}
// 2. Accede y muestra su valor
console.log(persona.nombre)
console.log(persona['edad'])
console.log(persona.ocupacion)
// 3. Agrega una nueva propiedad
persona.pais = 'Colombia'
console.log(persona)
// 4. Elimina una de las 3 primeras propiedades
delete persona.ocupacion
console.log(persona)
// 5. Agrega una función e invócala
persona.saludar = function () {
 console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`)
}
persona.saludar()
// 6. Itera las propiedades del objeto
for (let clave in persona) {
 console.log(`${clave}: ${persona[clave]}`)
}
// 7. Crea un objeto anidado
let usuario = {
 id: 101,
 perfil: {
  usuario: 'natalia_dev',
  nivel: 'junior',
 },
}
// 8. Accede y muestra el valor de las propiedades anidadas
console.log(usuario.perfil.usuario)
console.log(usuario.perfil.nivel)
// 9. Comprueba si los dos objetos creados son iguales
let otroObjeto = {
 nombre: 'Natalia',
 edad: 16,
 pais: 'Colombia',
}
console.log(persona === otroObjeto) // false (apuntan a diferentes espacios en memoria)
// 10. Comprueba si dos propiedades diferentes son iguales
console.log(persona.edad === usuario.id) // false (16 comparado con 101)
