//Script de Gerenciamento de Tarrefas

let tarefas = [ ];
let adicionar = true;

//Parte 1: Adicionar tarefas
while (adicionarMais) {
    let novaTarefa = prompt("Digite uma nova tarefa:");
    tarefas.push(novatarefa); //adiciona tarefa no final da lista

    let continuar = prompt("Deseja adcionar outra tarefa? (Sim/Não)");
    if (continuar.toLowerCase() !== "sim") {
        adicionarMais = false;
    }
}
//Exibe a lista completa de tarefas
alert("Lista de tarefas:\n" + tarefas.join("\n"));

//Parte 2: Remover a primeira tarefa
if (tarefas.length > 0) {
    let remover = prompt("Deseja remover a primeira tarefa da lista? (Sim/Não)");
    if (remover.toLowerCase () === "sim")
        {
            let tarefaRemovida = tarefas.shift(); //remove o primeiro item 
            alert(`Tarefa removida: $ {tarefaRemovida}\nLista atualizada:\n${tarefas.join("\n")}`);
            
        }
}