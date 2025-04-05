let numeros = []; // Vetor para armazenar os números

// Função para adicionar números ao vetor
function adicionarNumeros() {
  let inAnalisar = document.getElementById("inanalisar"); // Campo de entrada
  let outCrescente = document.getElementById("outcrescente"); // Elemento para exibir a lista

  let numero = inAnalisar.value; // Obtém o número digitado

  // Verifica se o campo está vazio ou se o número já existe na lista
  if (numero === "") {
    alert("Informe o número"); // Alerta caso o campo esteja vazio
    inAnalisar.focus(); // Retorna o foco para o campo de entrada
    return;
  }

  // Verifica se o número já existe no vetor
  if (numeros.includes(numero)) {
    alert("Número repetido! Não é permitido adicionar números iguais.");
    inAnalisar.focus();
    return;
  }

  numeros.push(numero); // Adiciona o número ao final do vetor

  let lista = ""; // Inicializa a string para armazenar a lista formatada

  // Exibe apenas os números com vírgula no lugar do ponto e separados por vírgula
  lista = numeros.map(num => num.replace('.', ',')).join(', '); // Adiciona vírgula entre os números

  outCrescente.textContent = lista; // Atualiza o conteúdo do elemento com a lista
  inAnalisar.value = ""; // Limpa o campo de entrada
  inAnalisar.focus(); // Retorna o foco para o campo de entrada
}

// Captura o botão de adicionar e associa a função ao evento de clique
let btAdicionar = document.getElementById("btadicionar");
btAdicionar.addEventListener("click", adicionarNumeros);

// Função para verificar se os números estão em ordem crescente
function verificarOrdem() {
  if (numeros.length === 0) {
    alert("A lista está vazia! Adicione números primeiro.");
    return;
  }

  let isCrescente = true; // Variável para verificar se a lista está em ordem crescente

  // Verifica se o vetor está em ordem crescente
  for (let i = 0; i < numeros.length - 1; i++) {
    if (parseFloat(numeros[i].replace(',', '.')) > parseFloat(numeros[i + 1].replace(',', '.'))) {
      isCrescente = false;
      break;
    }
  }

  // Exibe o resultado
  let outCrescente = document.getElementById("outcrescente");

  if (isCrescente) {
    outCrescente.textContent = "Os números estão em ordem crescente!";
  } else {
    outCrescente.textContent = "Os números não estão em ordem crescente!";
  }
}

// Captura o botão de verificar e associa a função ao evento de clique
let btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarOrdem);

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
