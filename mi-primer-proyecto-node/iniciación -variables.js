// definir constantes, aon fijas
const constante ="soy una constante";

console.log(constante)


// definir variables

var variable;
let variablelet;

// variable puede cambiar

var a = 1;
console.log(a);

a = 4;
console.log(a)


let b = 3;
console.log(b)

b=5
console.log(b)


// var

var variable = "Hola soy una variable VAR"

for (let i = 0; i < 3; i++) {
    variable;
}
for (let i = 0; i < 3; i++) {
    var variable="se reescribe la varable";
}

console.log(variable) 


// let


let variablelet_ = "Hola soy una variable VAR"


for (let i = 0; i < 3; i++) {
    let variablelet_="se reescribe la varable";
    console.log(variablelet_) 
}



console.log(variablelet_)

// var afecta a la variable de todo el codigo y let solo donde esta siendo definido

////////////////////
var num = 4;

console.log(typeof num)

num= "Hola mundo"

console.log(typeof num)
