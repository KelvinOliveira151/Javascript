function criptogMsg(){
    let mensagem = document.getElementById("msgINPUT");
    let par = document.getElementById("pares");
    let impar = document.getElementById("impares");

    let msg = mensagem.value;

    let pares = "";
    let impares ="";

    // Separa as letras de posições pares e ímpares
    for(let i = 0; i < msg.length; i++){
        if(i % 2 == 0){
            pares += msg[i]; // Posições pares
        }
        else{
            impares += msg[i]; // Posições impares
        }
    }

    par.innerText = pares;
    impar.innerText = impares;
}
//Mostra os pares e impares ao clicar no botão
let btCriptografar = document.getElementById("crip");
btCriptografar.addEventListener("click", criptogMsg);