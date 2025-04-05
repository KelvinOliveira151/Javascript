// Declara um vetor global que armazenará as notícias
let noticias = [];

// Função para adicionar uma notícia
function adicionarNoticia() {
  // Obtém referências aos elementos de entrada de dados na página (campo de notícia)
  let inNoticia = document.getElementById("inNoticia");

  let noticia = inNoticia.value;  // Obtém o valor do campo notícia

  // Verifica se o campo foi preenchido corretamente
  if (noticia == "") {
    alert("Informe corretamente a notícia");  // Exibe um alerta ao usuário
    inNoticia.focus();  // Posiciona o cursor no campo de notícia
    return;  // Sai da função
  }

  // Adiciona uma nova notícia ao vetor
  noticias.push(noticia);

  // Limpa o campo e posiciona o cursor no campo de notícia
  inNoticia.value = "";
  inNoticia.focus();

  // Exibe a quantidade de notícias cadastradas
  document.getElementById("outQuantidade").textContent = "Quantidade de notícias cadastradas: " + noticias.length;
}

// Obtém referência ao botão de adicionar e associa a função ao evento de clique
let btAdicionar = document.getElementById("btAdicionar");
btAdicionar.addEventListener("click", adicionarNoticia);

// Função para listar as notícias em ordem inversa, conforme número informado
function listarNoticias() {
  // Obtém o número de notícias que o usuário deseja visualizar
  let inNumero = document.getElementById("inNumero");
  let numero = Number(inNumero.value);

  // Verifica se o número informado é válido
  if (isNaN(numero) || numero <= 0 || numero > noticias.length) {
    alert("Informe um número válido de notícias");
    return;
  }

  // Cria um novo vetor com as últimas notícias (ordem inversa)
  let noticiasInvertidas = noticias.slice().reverse();

  // Concatena as últimas notícias solicitadas
  let lista = "";
  for (let i = 0; i < numero; i++) {
    lista += noticiasInvertidas[i] + "\n";
  }

  // Exibe as notícias na página
  document.getElementById("outLista").textContent = lista;
}

// Obtém referência ao botão de listar e associa a função ao evento de clique
let btListar = document.getElementById("btListar");
btListar.addEventListener("click", listarNoticias);