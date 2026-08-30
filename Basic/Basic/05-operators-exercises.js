/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let suma = 5 + 3
let resta = 10 - 4
let multiplicacion = 4 * 2
let division = 20 / 5
let modulo = 10 % 3 // Resto de la división
let exponente = 2 ** 3 // 2 elevado a la 3
// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let valor = 10

valor += suma // Suma y asigna (valor = valor + suma)
valor -= resta // Resta y asigna
valor *= multiplicacion // Multiplica y asigna
valor /= division // Divide y asigna
valor %= modulo // Módulo y asigna
valor **= exponente // Exponente y asigna
// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(10 > 5) // Mayor que
console.log(5 < 10) // Menor que
console.log(10 >= 10) // Mayor o igual que
console.log(5 <= 8) // Menor o igual que
console.log(5 == '5') // Igualdad por valor (débil)
// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(3 > 10) // Falso
console.log(15 < 10) // Falso
console.log(5 >= 10) // Falso
console.log(10 <= 5) // Falso
console.log(5 === '5') // Estrictamente igual (falso, porque uno es number y otro string)
// 5. Utiliza el operador lógico and
let andLogico = 10 > 5 && 5 < 10 // true (ambas se cumplen)
console.log(andLogico)
// 6. Utiliza el operador lógico or
let orLogico = 5 > 10 || 10 > 5 // true (al menos una se cumple)
console.log(orLogico)
// 7. Combina ambos operadores lógicos
let combinacionLogica = (10 > 5 && 5 < 10) || 20 < 10 // true
console.log(combinacionLogica)
// 8. Añade alguna negación
let negacion = !(10 > 5) // false (invierte el resultado de true a false)
console.log(negacion)
// 9. Utiliza el operador ternario
let esLluvia = false
let queHacer = esLluvia ? 'Llevar paraguas' : 'Salir sin paraguas'
console.log(queHacer)
// 10. Combina operadores aritméticos, de comparáción y lógicas
let operacionCompleja = 5 + 5 > 8 && 10 - 2 < 5
// (10 > 8 -> true) && (8 < 5 -> false) -> Resultado final: false
console.log(operacionCompleja)
