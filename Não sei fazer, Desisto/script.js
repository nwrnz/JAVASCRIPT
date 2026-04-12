const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

function addTask() {
    const taskText = input.value.trim();
    
    if (taskText === "") {
        alert("Por favor, digite uma tarefa!");
        return;
    }

    // Criar o elemento li
    const li = document.createElement('li');
    
    // Criar o span para o texto da tarefa
    const span = document.createElement('span');
    span.textContent = taskText;
    
    // Criar o botão de remover
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remover';
    removeBtn.className = 'remove-btn';
    
    // Evento para remover a tarefa
    removeBtn.onclick = function() {
        li.remove();
    };

    // Montar o item da lista
    li.appendChild(span);
    li.appendChild(removeBtn);
    
    // Adicionar à lista
    todoList.appendChild(li);

    // Limpar o input
    input.value = "";
    input.focus();
}

// Adicionar tarefa ao clicar no botão
addBtn.addEventListener('click', addTask);

// Adicionar tarefa ao pressionar Enter
input.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});