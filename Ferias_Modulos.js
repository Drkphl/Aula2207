const prompt = require('prompt-sync')({ sigint: true });
let Atividades = [];
let Dia = [];
let acao;
let data;

function checkData(num) {
    if (num === isNaN) {
        console.log('data invalida, por favor insira uma data válida');
    } else {
        Atividades.push(acao);
        Dia.push(data);
        console.log('atividade adicionada com sucesso. Insira outra atividade ou digite sair');
    }
}

function listar() {
    console.log(`\no seu nome é ${nome}, e aqui estão suas atividades: \n`);

    Atividades.forEach((acao, index) => {
        console.log(index + 1 + '. ' + acao + ' foi realizada no dia ' + Dia[index]);
    });
    process.exit();
}

function adicionar() {
    acao = prompt('o que você fez nas férias?');
    data = Number(prompt('Que dia?'));
}

module.exports = { checkData, listar, adicionar };
