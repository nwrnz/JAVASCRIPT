let input1 = document.getElementById("numero1");
let input2 = document.querySelector("#numero2");
let botao = document.getElementById("botao-soma");

botao.addEventListener("click", function(){
    let soma = Number(input1.value) + Number(input2.value);
    let p = document.getElementById("resultado");
    p.textContent = "Valor da soma: " + soma    
})