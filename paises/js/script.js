const paises = [
  "Brasil",
  "Argentina",
  "Chile",
  "Uruguai",
  "Paraguai",
  "Peru",
  "Colômbia",
  "México",
  "Canadá",
  "Estados Unidos"
];

let lista = document.getElementById("listaPaises");

let quantidade = document.getElementById("qtdPaises");


function listarPaises(){
    lista.innerHTML = " ";    

    for(let i = 0; i < paises.length; i++){
        lista.innerHTML += '<li>' + paises[i] + '</li>';
    }

    quantidade.innerHTML = '<p> Quantidade de paises: ' + paises.length + '</p>';
}