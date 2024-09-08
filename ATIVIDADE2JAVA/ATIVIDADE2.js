/* CÓDIGO PARA VERIFICAÇÃO DE MAIORIDADE */

let idade = parseInt(prompt('Informe sua idade:'));
let body = document.body;
let msg = document.getElementById('mensagem');

if (isNaN(idade)) {
    msg.innerHTML = 'Por favor, insira uma idade válida.';
} else if (idade <= 17) {
    body.style.background = 'Darkred';
    msg.style.fontSize = 'xx-large';
    msg.style.color = 'Cornsilk';
    msg.innerHTML = 'Você é menor de idade';
} else {
    body.style.background = 'Aquamarine';
    msg.style.fontSize = 'xx-large';
    msg.style.color = 'CadeBlue';
    msg.innerHTML = 'Você é maior de idade';
}
