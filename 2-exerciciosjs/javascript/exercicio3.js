function Palindromo() {
    let inPalindromo = document.getElementById("inPalindromo");
    let outPalindromo = document.getElementById("outPalindromo");

    // Corrige o método toUppercase para toUpperCase
    let palavra = inPalindromo.value.replace(/[^A-Za-z0-9]/g, "").toUpperCase();

    if (palavra === "") {
        alert("Informe a palavra...");
        inPalindromo.focus();
        return;
    }

    // Corrige o nome da variável de "Palavrainvertida" para ser consistente
    let palavraInvertida = palavra.split("").reverse().join("");

    if (palavra === palavraInvertida) {
        outPalindromo.textContent = `"${palavra}" é um Palíndromo!`;
    } else {
        outPalindromo.textContent = `"${palavra}" não é um Palíndromo.`;
    }
}

// Corrige o listener para o botão
let btLeia = document.getElementById("btLeia");
btLeia.addEventListener("click", Palindromo); // Adiciona evento de clique ao botão




