// Coleta de dados
var res1 = document.getElementById('P1q3');
var res2 = document.getElementById('P2q1');
var res3 = document.getElementById('P3q1');
var res4 = document.getElementById('P4q2');
var res5 = document.getElementById('P5q3');
var res6 = document.getElementById('P6q3');
var res7 = document.getElementById('P7q1');
var p = document.getElementById('acertou');

// Função para validar resposta
function submitQuiz() {
 res1.checked ? sessionStorage.setItem('res1', 1) : sessionStorage.setItem('res1',0);   
}

function submitQuiz2() {
    res2.checked ? sessionStorage.setItem('res2', 1) : sessionStorage.setItem('res2',0); 
}

function submitQuiz3() {
    res3.checked ? sessionStorage.setItem('res3', 1) : sessionStorage.setItem('res3',0); 
}

function submitQuiz4() {
    res4.checked ? sessionStorage.setItem('res4', 1) : sessionStorage.setItem('res4',0); 
}

function submitQuiz5() {
    res5.checked ? sessionStorage.setItem('res5', 1) : sessionStorage.setItem('res5',0); 
}
function submitQuiz6() {
    res6.checked ? sessionStorage.setItem('res6', 1) : sessionStorage.setItem('res6',0); 
}

function submitQuiz7() {
    res7.checked ? sessionStorage.setItem('res7', 1) : sessionStorage.setItem('res7',0); 
}

// Exibição do resultado
function result(){
var x1 = parseInt(sessionStorage.getItem('res1'));
var x2 = parseInt(sessionStorage.getItem('res2'));
var x3 = parseInt(sessionStorage.getItem('res3'));
var x4 = parseInt(sessionStorage.getItem('res4'));
var x5 = parseInt(sessionStorage.getItem('res5'));
var x6 = parseInt(sessionStorage.getItem('res6'));
var x7 = parseInt(sessionStorage.getItem('res7'));
p.innerHTML = `Você acertou: ${(x1+x2+x3+x4+x5+x6+x7)}`; 
}