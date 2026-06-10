//Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");

function resultadoNotaClick(event){
    event.preventDefault();

    const inputNotaValue = inputNota.value;


    //Validação
    if(inputNotaValue == ""){
        alert("Campo vazio! Digite uma nota!")
    } else if (inputNotaValue >= 6){
        alert("aprovado")
    } else{
        alert("reprovado")
    }
    
    
    console.log(inputNotaValue);
    

}


