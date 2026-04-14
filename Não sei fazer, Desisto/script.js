const campoTarefa = document.getElementById('campoTarefa');
const botaoAdicionar = document.getElementById('botaoAdicionar');
const listaTarefas = document.getElementById('listaTarefas');

function adicionarTarefa() {
    const textoTarefa = campoTarefa.value;

    if (textoTarefa === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    const itemLista = document.createElement('li');

    const texto = document.createElement('span');
    texto.textContent = textoTarefa;

    const botaoRemover = document.createElement('button');
    botaoRemover.textContent = 'Remover';
    botaoRemover.className = 'botao-remover';

   botaoRemover.addEventListener('click', function() {
    itemLista.remove();
});

    itemLista.appendChild(texto);   
    itemLista.appendChild(botaoRemover);

    listaTarefas.appendChild(itemLista);

    campoTarefa.value = "";
}

botaoAdicionar.addEventListener('click', adicionarTarefa);