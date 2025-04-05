let candidatos = []; // Vetor para armazenar os dados dos candidatos

// Função para adicionar candidatos
function adicionarCandidato() {
  let inNome = document.getElementById("inNome"); // Campo de entrada para nome
  let inAcertos = document.getElementById("inAcertos"); // Campo de entrada para número de acertos
  let outCandidatos = document.getElementById("outCandidatos"); // Elemento para exibir a lista

  let nome = inNome.value; // Obtém o nome do candidato
  let acertos = parseInt(inAcertos.value); // Obtém o número de acertos e converte para inteiro

  // Verifica se os campos estão vazios
  if (nome === "" || isNaN(acertos)) {
    alert("Informe o nome e o número de acertos corretamente.");
    inNome.focus();
    return;
  }

  // Adiciona o candidato ao vetor
  candidatos.push({ nome: nome, acertos: acertos });

  // Exibe a lista de candidatos
  let lista = candidatos.map(candidato => `${candidato.nome} - Acertos: ${candidato.acertos}`).join('<br>');

  outCandidatos.innerHTML = lista; // Atualiza o conteúdo do elemento com a lista
  inNome.value = ""; // Limpa o campo de entrada de nome
  inAcertos.value = ""; // Limpa o campo de entrada de acertos
  inNome.focus(); // Retorna o foco para o campo de nome
}

// Captura o botão de adicionar e associa a função ao evento de clique
let btAdicionarCandidato = document.getElementById("btAdicionarCandidato");
btAdicionarCandidato.addEventListener("click", adicionarCandidato);

// Função para exibir os candidatos aprovados para a 2ª fase
function aprovadosSegundaFase() {
  let inNotaAprovacao = document.getElementById("inNotaAprovacao"); // Campo para nota de aprovação
  let outAprovados = document.getElementById("outAprovados"); // Elemento para exibir aprovados

  let notaAprovacao = parseInt(inNotaAprovacao.value); // Obtém a nota de aprovação e converte para inteiro

  // Verifica se a nota de aprovação foi informada
  if (isNaN(notaAprovacao)) {
    alert("Informe a nota de aprovação.");
    inNotaAprovacao.focus();
    return;
  }

  // Filtra os candidatos aprovados
  let aprovados = candidatos.filter(candidato => candidato.acertos >= notaAprovacao);

  // Verifica se houve aprovados
  if (aprovados.length === 0) {
    outAprovados.textContent = "Nenhum candidato aprovado.";
  } else {
    // Ordena os candidatos aprovados em ordem decrescente de número de acertos
    aprovados.sort((a, b) => b.acertos - a.acertos);
    
    // Exibe a lista de aprovados
    let listaAprovados = aprovados.map(candidato => `${candidato.nome} - Acertos: ${candidato.acertos}`).join('<br>');
    outAprovados.innerHTML = listaAprovados;
  }
}

// Captura o botão de exibir aprovados e associa a função ao evento de clique
let btAprovadosSegundaFase = document.getElementById("btAprovadosSegundaFase");
btAprovadosSegundaFase.addEventListener("click", aprovadosSegundaFase);