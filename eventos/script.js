const botao = document.querySelector("#btnRevelar");
const texto = document.querySelector("#resposta");

botao.addEventListener("click", function() {

    texto.innerHTML = 'O javaScript deixas as paginas dinamicas';
    botao.style.display = "none";
})