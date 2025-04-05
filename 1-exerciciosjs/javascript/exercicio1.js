let clubes = [];

// Função para validar o preenchimento e adicionar um clube ao vetor
function adicionarClube() {
  let inTime = document.getElementById("inTime"); // Campo de entrada do clube
  let outLista = document.getElementById("outLista"); // Elemento onde será exibida a lista de clubes
  
  let nome = inTime.value; // Obtém o nome do clube digitado no campo de entrada

  // Verifica se o campo de entrada está vazio
  if (nome == "") {
    alert("Informe o nome do clube"); // Exibe um alerta caso o nome não seja informado
    inTime.focus(); // Retorna o foco para o campo de entrada
    return; // Encerra a execução da função
  }

  clubes.push(nome); // Adiciona o nome do clube ao final do vetor

  let lista = ""; // Inicializa a string que irá armazenar a lista de clubes

  // Percorre o vetor de clubes e cria a lista formatada
  for (let i = 0; i < clubes.length; i++) {
    lista += (i + 1) + ". " + clubes[i] + "\n"; // Concatena a posição e o nome do clube
  }

  outLista.textContent = lista; // Atualiza o conteúdo do elemento HTML para exibir a lista de clubes

  inTime.value = ""; // Limpa o campo de entrada
  inTime.focus(); // Retorna o foco para o campo de entrada
}

// Captura o botão de adicionar e associa a função ao evento de clique
let btvalidar = document.getElementById("btvalidar"); // Obtém o botão "Adicionar"
btvalidar.addEventListener("click", adicionarClube); // Adiciona um evento de clique ao botão

// Função para listar os clubes
function listarClubes() {
  let outLista = document.getElementById("outLista"); // Elemento onde será exibida a lista de clubes

  if (clubes.length === 0) {
    outLista.textContent = "Não há clubes cadastrados."; // Caso a lista esteja vazia
  } else {
    let lista = ""; // Inicializa a string que irá armazenar a lista de clubes

    // Percorre o vetor de clubes e cria a lista formatada
    for (let i = 0; i < clubes.length; i++) {
      lista += (i + 1) + ". " + clubes[i] + "\n"; // Concatena a posição e o nome do clube
    }

    outLista.textContent = lista; // Atualiza o conteúdo do elemento HTML para exibir a lista de clubes
  }
}

// Captura o botão de listar clubes e associa a função ao evento de clique
let btListarClubes = document.getElementById("btListarClubes");
btListarClubes.addEventListener("click", listarClubes); // Adiciona um evento de clique ao botão

// Função para montar a tabela de jogos
function montarTabelaJogos() {
  let outTabela = document.getElementById("outTabela"); // Elemento onde será exibida a tabela de jogos

  // Verifica se o número de clubes é ímpar
  if (clubes.length % 2 !== 0) {
    alert("Número ímpar de clubes. Não é possível montar a tabela de jogos."); // Exibe mensagem de erro
    outTabela.textContent = ""; // Limpa a tabela de jogos
    return; // Encerra a execução da função
  }

  let tabela = ""; // Inicializa a string para armazenar a tabela de jogos

  // Monta a tabela de jogos no formato "primeiro x último, segundo x penúltimo, etc."
  for (let i = 0; i < clubes.length / 2; i++) {
    tabela += clubes[i] + " x " + clubes[clubes.length - 1 - i] + "\n";
  }

  outTabela.textContent = tabela; // Atualiza o conteúdo do elemento HTML para exibir a tabela de jogos
}

// Captura o botão de montar tabela de jogos e associa a função ao evento de clique
let btMontarTabela = document.getElementById("btMontarTabela");
btMontarTabela.addEventListener("click", montarTabelaJogos); // Adiciona um evento de clique ao botão

/*
GLOSSÁRIO DE COMANDOS:

- let: Declara uma variável de escopo local.
- function: Declara uma função.
- document.getElementById(): Obtém um elemento HTML pelo seu ID.
- .value: Obtém ou define o valor de um campo de entrada.
- .push(): Adiciona um elemento ao final do array.
- .unshift(): Adiciona um elemento no início do array.
- .shift(): Remove o primeiro elemento do array e retorna seu valor.
- .textContent: Define ou retorna o conteúdo textual de um elemento.
- .focus(): Move o cursor para um campo de entrada.
- alert(): Exibe uma janela de alerta.
- for: Estrutura de repetição que percorre um bloco de código um determinado número de vezes.
- .length: Retorna o tamanho do array.
- addEventListener(): Associa um evento a um elemento.
*/