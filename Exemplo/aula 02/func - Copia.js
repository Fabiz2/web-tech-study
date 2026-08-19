function minhaFuncao(){
    document.write("Minha função!");
}

function pularLinha(){
    document.write("<br>")
}

function mostrarNome(nome){
    pularLinha();
    document.write(nome);
    pularLinha();
}

minhaFuncao();
pularLinha();
minhaFuncao();
mostrarNome("fabas");
mostrarNome("larvas");
mostrarNome("jarbas");
