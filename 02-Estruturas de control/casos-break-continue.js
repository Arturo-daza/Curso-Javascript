// Casos específicos - break, continue

let lista  =[1,2,3,4,5,6,7,8]

for (var i = 0; i < lista.length; i++) {

    if (lista[i] === 3){
        continue
    }
    let j=50
    console.log(lista[i]); 
    if (lista[i]>5){
        break;
    }    

}

// Cuál es el ámbito de un bucle
console.log(i);
console.log(j);

// se las variables se declaran con let se quedan solo en el bucle,y los const
// si se declaran con var quedan en el programa
