// Função JavaScript para gerar a citação no formato desejado
function gerarCitacao() {
    // Obtém o nome completo do autor a partir do input
    var nomeCompleto = document.getElementById('nome').value;

    // Se o nome estiver vazio, não faz nada
    if (nomeCompleto === '') {
        document.getElementById('citacao').innerHTML = '';
        return;
    }

    // Divide o nome completo em partes (primeiro nome, sobrenome, etc.)
    var partesNome = nomeCompleto.split(' ');

    // O sobrenome será a última palavra
    var sobrenome = partesNome[partesNome.length - 1];

    // As iniciais são as primeiras letras de cada nome, exceto o sobrenome
    var iniciais = partesNome.slice(0, partesNome.length - 1)
                              .map(nome => nome.charAt(0) + '.')
                              .join(' ');

    // Exibe a citação bibliográfica no formato "Sobrenome, N."
    var citacao = sobrenome + ', ' + iniciais;

    // Exibe o resultado
    document.getElementById('citacao').innerHTML = 'Citação bibliográfica: ' + citacao;
}
