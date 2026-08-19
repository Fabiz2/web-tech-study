const apagarBtn = document.querySelector("#apagar");

apagarBtn.addEventListener("click", function(){
    //limpa todos os valores no localStorage
    localStorage.clear();

    //limpa lista 
    listaValores.innerHTML="";
}); 