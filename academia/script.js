const trocarCor = document.getElementById("troca-tema");
const trocarImgemBotao = document.getElementById("btnTrocar")
const nome = document.getElementById("nome")

trocarCor.addEventListener("click", function(){
    document.body.classList.toggle("dark");
})

let imagemAtual = 1;

function trocarImagem() {
    const imagem = document.getElementById("imagem");

    if (imagemAtual === 1) {
        imagem.src = "cbum.jpg";
        imagemAtual = 2;
        nome.innerHTML = "Cris Bumpstead"
    } else if(imagemAtual == 2) {
        imagem.src = "yates.jpg";
        imagemAtual = 3;
        nome.innerHTML = "Dorian Yates"
    } else{
        imagem.src = "mentzer.jpg";
        imagemAtual = 1;
        nome.innerHTML = "Mike Mentzer"
    }
}

trocarImgemBotao.addEventListener("click", trocarImagem);
