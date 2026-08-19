const listaValores = document.querySelector("#listaValores");

//função para carregar valores na lista
carregarValoreSalvos();

function carregarValoreSalvos(){
    listaValores.innerHTML = "";

    for(let i = 0; i < localStorage.length; i++){
        const chave = localStorage.key(i);
        
        if(chave.startsWith('ValorSalvo')){
            const valor = localStorage.getItem(chave);
            const listItem = document.createElement("li")
            listItem.textContent = valor;
            listaValores.appendChild(listItem);
        }
    }
}