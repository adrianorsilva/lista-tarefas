const botao = document.querySelector('.btm-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhaListadeItens = []

function adicionarTarefa(){
    minhaListadeItens.push({
        tarefa: input.value,
        concluida: false
    })

    mostrarTarefa()
    input.value = ''
}

function mostrarTarefa() {
    let novaLi = ''

    minhaListadeItens.forEach((item, index) => {
        novaLi = novaLi+ ` <li class="task ${item.concluida && "done"}">
            <img src="assets/img/check.png" alt="check-na-tarefa" onclick="concluirTarefas(${index})">
                <p>${item.tarefa}</p>
            <img src="assets/img/trash.png" alt="check-na-lixeira" onclick="deletarItem(${index})")>
        </l>    
    `
  
    })
  
    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista',JSON.stringify(minhaListadeItens))

}


 function deletarItem(index){
     minhaListadeItens.splice(index,1)
     mostrarTarefa()
}

function concluirTarefas(index){
    minhaListadeItens[index].concluida = !minhaListadeItens[index].concluida

    mostrarTarefa()
}

function recarregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    minhaListadeItens = JSON.parse(tarefasDoLocalStorage)
    mostrarTarefa()
}

recarregarTarefas()


botao.addEventListener('click', adicionarTarefa)