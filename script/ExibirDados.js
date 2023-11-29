// Recebimento da div em branco
var coltDados = document.getElementById('dados');

// Exibição de dados do usuário ao carregar a página
window.onload = function () { 
    var nome = sessionStorage.getItem('Nome');
    var email = sessionStorage.getItem('Email');
    var senha = sessionStorage.getItem('Senha');
    coltDados.innerHTML = `Nome: ${nome} <br> Email: ${email} <br> Senha: ${senha}`;
} 