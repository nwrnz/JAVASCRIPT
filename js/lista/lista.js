let botaoAlerta = document.getElementById("btnClique");
    botaoAlerta.addEventListener("click", function(){
        alert ("Botão foi pressionado");
        let p = document.getElementById("texto");
        p.textContent = "Apertou botão"
    })

let info = document.getElementById("inputNome")
let botaoNome = document.getElementById("btnMostrar")
    botaoNome.addEventListener("click", function(){
        alert (info.value);
    })

let botao = document.getElementById("btnAdicionar")
// 8 //
let btnRemover = document.getElementById("btnRemover")
    botao.addEventListener("click", function(){
        let novoElemento = document.createElement("li");
        novoElemento.textContent = "teste2";
        document.getElementById("lista").appendChild(novoElemento);
    })
    btnRemover.addEventListener("dblclick", function(){
        lista.removeChild(lista.lastElementChild)
    })


let cor =document.getElementById("btnCor")
    cor.addEventListener("click", function(){
        let caixinha = document.getElementById("caixa");
        if (caixinha.style.backgroundColor == "blue"){
         caixinha.style.backgroundColor = "red"   
        }else{
        caixinha.style.backgroundColor = "blue"}
    })

let clique = document.getElementById("btnClique")
let contandor = 0
    clique.addEventListener("click", function(){
        contandor ++
        console.log(contandor)
    })




