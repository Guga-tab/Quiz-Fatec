// Vídeo de apoio -> https://youtu.be/rudAiGQ-mes?si=Lnjl9qEkaltcfHH4

// Coleta de dados
const form = document.querySelector("#form");
const nameInput = document.querySelector("#iname");
const emailInput = document.querySelector("#iemail");
const passwordInput = document.querySelector("#isenha");
const CpasswordInput = document.querySelector("#csenha");
var user = [nameInput, emailInput, passwordInput, CpasswordInput];

// função de verificação de campos do formulário
var redirect = form.addEventListener("submit", (event) => {
    event.preventDefault();
   
    // Verifica se o nome está vazio
    if (user[0].value === ""){
        alert("Por favor, Preencha o seu nome!");
        return;
    }

    // Verifica se o e-mail está preenchido e se é valido
    if (user[1].value === "" || !isEmailValid(user[1].value)){
        alert("Por favor, Preencha o seu email corretamente!");
        return;
    }

    // Verifica se a senha está correta
    if(user[2].value !== user[3].value){
        alert("As senhas não se coincidem!");
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, enviar o form
    form.submit();
});

// Função que valida e-mail
function isEmailValid(email){
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-0._-]+\.[a-zA-Z]{2,}$/
    );

    
    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

// Cadastro das informações do usuário no LocalStorage

 function cadastrar(){
   sessionStorage.setItem('Nome', nameInput.value); 
   sessionStorage.setItem('Email', emailInput.value); 
   sessionStorage.setItem('Senha', passwordInput.value); 
}

// Atualização de dados
function atualizar(){
    sessionStorage.setItem('Nome', nameInput.value); 
    sessionStorage.setItem('Email', emailInput.value); 
    sessionStorage.setItem('Senha', passwordInput.value); 
}

// Excluir dados
function del(){
sessionStorage.clear();
}