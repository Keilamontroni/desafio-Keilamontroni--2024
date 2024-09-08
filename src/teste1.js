/*CODIGO PARA VERIFICAÇÃO DE MAIORIDADE*/


    let idade = parseInt(prompt('Informe sua idade:'));
    let body = document.body;
    let msg = document.getElementById('mensagem');

    if (idade <= 18) {
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
}