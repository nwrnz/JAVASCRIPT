// tipos de dados::

//texto
let nome = "Luis";
let nome2 = 'pdid'

console.log("Me chamo " + nome + " " + nome2)    ;
console.log(nome2);

//numero

let num = "35";

console.log(num);
console.log("Minha idade é: " + num *2)

//Booleanos
let booleano = false;
console.log("maior que 18 anois:" + booleano)

//null e underfined
let testeNull = null
let testeUnderfined;

console.log(testeNull);
console.log(testeUnderfined);
console.log(testeUnderfined * 2);

console.log("6" + 4);
console.log("6" - 4); 
console.log("6" * 4); 
console.log("6" / 4); 

let numero = 1;
let numeroString = String(numero);
let string ="86";
let stringNumero = Number(string);

console.log(typeof numero, numero);
console.log(typeof numeroString, numeroString);
console.log(typeof string, string);
console.log(typeof stringNumero, stringNumero)
let numero2 = 3
// condição 
if (testeNull != null) {
    console.log("Não é nulo ")
}else if (numero2> 4) {
    console.log("Numero maior do que 4")
}
else{
    console.log("É nulo")
}

// tipos de variaveis em javascript

//let

let teste =2;
teste= 4;

if (teste == 4) {
    console.log(teste);
}

const pi = 3.14;
pi = 3.15