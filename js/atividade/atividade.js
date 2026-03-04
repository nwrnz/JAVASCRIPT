let nome = "renan"
let idade = "17"
let curso = "infonet"
console.log(nome +", "+ idade +", "+ curso)


let n1 = Number(prompt("Digite um valor"))
let n2 = Number(prompt ("digite um valor"))
soma = n1+n2
console.log(soma)
sub = n1 - n2
console.log(sub)
mult = n1*n2
console.log(mult)
div = n1/n2 
console.log(div)
res = n2*div
console.log(res)

    
    let numero = "35"
    let num = Number(numero)
    console.log(num)
    

    let  a = 10
    let  b = "10"
    if (a==b){
        console.log("Verdadeiro")

    }else if (a===b){
        console.log("False")
    }

    let id = Number(prompt("Digite sua idade"))
    if (id>18){
        console.log("Você é maior de idade")
    }else{
        console.log("Acesso negado, menor de idade")
    }


    

    let n = Number(prompt("Digite um numero qualquer"))
    if (n < 0 ){
        console.log("Negativo")
    }else if(n == 0){
        console.log("Zero")
    }else{
        console.log("Positivo")
    }



    let nota = Number(prompt ("digite uma nota"))
    if (nota >= 7){
        console.log("Aprovado")
    }else if(nota >= 5 && nota <= 7){
        console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }



    for (let i = 0; i <=10; i++){
        console.log(i)
    }



    let s = 0
    for ( let y = 0; y <= 100; y++){
        s += y
    }
    console.log (s);

    
    let contador = 0;

    while (contador >= 5){
        console.log("Contagem: " + contador);
        contador--;
    }




    let nu1 = 5
    let nu2 =45
    function somas (nu1,nu2){
        return nu1+nu2
    }
    let resultado = somas (2)
    console.log(resultado)

    function imparpar (n1){
        if (n1 /2 ==0 ){
        console.log("Ele é par")
        }else{
            console.log("Ele é impar")
        }
        return
    }
    console.log(imparpar)