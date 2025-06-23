function setup() {
  noCanvas(); // Não vamos usar o canvas do p5.js
}

// Função chamada ao clicar no botão "Sign Up"
function showAgroStore() {
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("agro-screen").style.display = "block";
}

// Função para exibir a tela de detalhes do produto
function verMais(produto) {
  // Esconde a tela da loja
  document.getElementById("agro-screen").style.display = "none";

  // Esconde todas as telas de produto (caso o usuário volte e clique em outro)
  let produtos = ["morango", "limao", "melancia", "banana"];
  produtos.forEach(function(p) {
    let tela = document.getElementById("produto-" + p);
    if (tela) tela.style.display = "none";
  });

  // Mostra a tela do produto escolhido
  let telaProduto = document.getElementById("produto-" + produto);
  if (telaProduto) {
    telaProduto.style.display = "block";
  }
}

// Voltar da tela do produto para a loja
function voltarParaLoja() {
  // Esconde todas as telas de produto
  let produtos = ["morango", "limao", "melancia", "banana"];
  produtos.forEach(function(p) {
    let tela = document.getElementById("produto-" + p);
    if (tela) tela.style.display = "none";
  });

  // Mostra a tela da loja
  document.getElementById("agro-screen").style.display = "block";
}

// Mensagem ao clicar em "Comprar"
function comprarProduto(produto) {
  alert("Você comprou: " + produto);
}