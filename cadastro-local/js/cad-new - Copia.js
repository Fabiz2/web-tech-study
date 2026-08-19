const campo = document.querySelector("#campo")
const salvarBtn = document.querySelector("#salvar")

//adicionar evento clique no botao salva
salvarBtn.addEventListener("click", function(event){
    event.preventDefault()
    const valor = campo.value;

    if(valor.trim() == ""){
        alert("Campo obrigatorio")
        return
    }

    //salvar no storage
    const chave = `ValorSalvo_${Date.now()}`;
    localStorage.setItem(chave, valor);

    //limpar campo apos salvar
    campo.value = "";

    carregarValoreSalvos();
})