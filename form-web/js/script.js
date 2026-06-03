/*
    Criando variaveis
*/
const nome = document.querySelector("#nome");
const button = document.querySelector("button");
const lista = document.querySelector(".lista");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");

/* 
    Criando função
*/
button.addEventListener("click", (event) => {
    event.preventDefault();
    
   const inputValue = nome.value;
   const inputValueEmail = email.value;
   const inputValueTelefone = telefone.value;

   const templateHTML = `<li>nome: ${inputValue} <br>E-mail: ${inputValueEmail} <br>Telefone: ${inputValueTelefone}<br></li>`; 
   
    //incluir itens no HTML
    lista.innerHTML += templateHTML;

    //limpando campo
    nome.value = "";
    email.value = "";
    telefone.value = "";
});