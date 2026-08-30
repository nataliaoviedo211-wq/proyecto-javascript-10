/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades
class Persona {
 constructor(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
 }
}
// 2. Añade un método a la clase que utilice las propiedades
class Persona {
 constructor(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
 }

 presentarse() {
  return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
 }
}
// 3. Muestra los valores de las propiedades e invoca a la función
let persona1 = new Persona('Natalia', 16)

console.log(persona1.nombre)
console.log(persona1.edad)
console.log(persona1.presentarse())
// 4. Añade un método estático a la primera clase
class Persona {
 constructor(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
 }

 presentarse() {
  return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`
 }

 static saludarGenerico() {
  return '¡Hola a todos los seres humanos!'
 }
}
// 5. Haz uso del método estático
// Los métodos estáticos se llaman directamente desde la clase, no desde una instancia
console.log(Persona.saludarGenerico())
// 6. Crea una clase que haga uso de herencia
class Estudiante extends Persona {
 constructor(nombre, edad, grado) {
  super(nombre, edad) // Hereda propiedades de Persona
  this.grado = grado
 }

 estudiar() {
  return `${this.nombre} está cursando el grado ${this.grado}.`
 }
}

let estudiante1 = new Estudiante('Natalia', 16, 'décimo')
console.log(estudiante1.presentarse())
console.log(estudiante1.estudiar())
// 7. Crea una clase que haga uso de getters y setters
class Rectangulo {
 constructor(alto, ancho) {
  this.alto = alto
  this.ancho = ancho
 }

 get area() {
  return this.alto * this.ancho
 }

 set modificarAlto(nuevoAlto) {
  this.alto = nuevoAlto
 }
}
// 8. Modifica la clase con getters y setters para que use propiedades privadas
class RectanguloPrivado {
 #alto // Propiedad privada
 #ancho // Propiedad privada

 constructor(alto, ancho) {
  this.#alto = alto
  this.#ancho = ancho
 }

 get area() {
  return this.#alto * this.#ancho
 }

 set alto(nuevoAlto) {
  if (nuevoAlto > 0) {
   this.#alto = nuevoAlto
  }
 }
}
// 9. Utiliza los get y set y muestra sus valores
let rect = new RectanguloPrivado(10, 5)
console.log(rect.area) // Uso del getter para calcular el área (50)

rect.alto = 20 // Uso del setter para cambiar el alto
console.log(rect.area) // Nuevo cálculo con getter (100)
// 10. Sobrescribe un método de una clase que utilice herencia
class Animal {
 hacerSonido() {
  return 'El animal emite un sonido.'
 }
}

class Gato extends Animal {
 // Sobrescribimos el método de la clase padre
 hacerSonido() {
  return 'El gato maúlla: ¡Miau!'
 }
}

let miGato = new Gato()
console.log(miGato.hacerSonido()) // Imprime el método sobrescrito
