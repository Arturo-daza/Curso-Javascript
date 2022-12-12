// Listas, array o arreglos

const lista = [1, "hola", true, undefined, null];
const lista2= new Array (1, "hola", true, undefined, null)
const lista3=new Array(3)
lista3[0]="soy el primer elemento, index 0"

const lista4 = [lista, lista2, lista3]

console.log(lista)
console.log(lista2)
console.log(lista3)
console.log(lista4)


//objetos
const movil = {
    altura: 10, 
    anchura: 5, 
    marca: "Xiaomi", 
    isWhite: false, 
    contactos: ["Gorka", "Martín"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    altura_tarjeta: 4
}
console.log(movil.marca)
console.log(movil.altura_tarjeta)

movil.anio=2019
movil.marca= "Samsung "

console.log(movil.marca)

console.log(movil.tarjeta.marca)
console.log(movil.anio)


// Fechas
// Librerías de apoyo Moment.js

const ahora = new Date()

console.log(ahora)

const fecha_milis = new Date(10) // Utilizando los milisengundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020")
console.log(fecha_cadena)

const fecha_valores = new Date ("2022,1,15")
console.log(fecha_valores)

const dia= ahora.getDate()
const mes = ahora.getMonth()
const anio= ahora.getFullYear()
console.log(dia, mes, anio)