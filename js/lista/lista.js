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