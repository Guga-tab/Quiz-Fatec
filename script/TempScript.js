// Coleta de informações
var ele = document.getElementById('timer');
var nome = sessionStorage.getItem('Nome');

// Função do temporizador
function Temp(tempoLimite, nome) {
  var sec = tempoLimite;
  var timer;
  var ele = document.getElementById("timer");

  // Função que será executada a cada 1 segundo
  function timerFunction() {
      sec--;
      ele.innerHTML = sec;
      console.log(sec);
     
    //   Se o tempo esgosta exibi um alerta, e deleta as resposatas com um loop FOR anteriores do usuário. Também o redireciona ao início do quiz.
      if (sec < 0) {
          alert('Acabou o tempo ' + nome + ', tente novamente!');
          for (let i = 1; i <= 7; i++) {
              sessionStorage.removeItem('res' + i);
          }
          window.location.href = "../Quiz/P1.html";
          clearInterval(timer);
      }
  }

  // Iniciar o temporizador
  timer = setInterval(timerFunction, 1000);
}

// Uso do temporazidor
Temp(15, nome);

