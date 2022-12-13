// Bucles For 

// for (inicialización; condición;actualización) {
//     // cuerpo del bucle
// }

// i++ = i+=1

for (let i=0; i<10; i++){
    console.log(i)
}

let lista = [1,4,6,2,3,7,12]

for(let i=0; i < lista.length; i++){
    console.log(lista[i]);
}

// Estrutura for of

for(let valor of lista){
    console.log(valor);
}

// Estrutura forEach

lista.forEach(valor => { 
    console.log(valor);
})

//Estrutura for 

let persona = {
    nombre :"pedro",
    apellido: "Villar",
    edad:34, 
    isDeveloper:true
}

console.log(persona.nombre);
let prop ="edad"
console.log(persona[prop]);

for(let propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}