//Variaveis
const inputNota = document.getElementById("nota");
const resultado = document.getElementById("resultado");
const message = document.getElementById("message");

function resultadoNotaClick(event){
    event.preventDefault();

    const inputNotaValue = inputNota.value;


    //Validação
    if(inputNotaValue == ""){
        //alert("Campo vazio! Digite uma nota!");
        message.style.display = "block";
        return false;
    } 
    
    
    if (inputNotaValue >= 6){
        resultado.innerHTML = "Aprovado"
    } else{
        resultado.innerHTML = "Reprovado"
    }
    
    
    console.log(inputNotaValue);
    

    inputNotaValue = "";

}


