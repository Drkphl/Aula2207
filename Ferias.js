const prompt = require('prompt-sync')({ sigint: true });
const { checkData } = require('./Ferias_Modulos');
let atividades = [];
let dia = [];
let acao;
let data;

let nome = prompt('qual o seu nome?');

while (true) {
    acao = prompt('o que você fez nas férias?');
    if (acao === 'sair') {
        console.log(`\no seu nome é ${nome}, e aqui estão suas atividades: \n`);

        atividades.forEach((acao, index) => {
            console.log(index + 1 + '. ' + acao + ' foi realizada no dia ' + dia[index]);
        });
        process.exit();
    } else {
        data = Number(prompt('Que dia?'));
        let check = checkData(data);
        console.log(acao, data, check);
        if (check === false) {
            atividades.push(acao);
            dia.push(data);
        } else if (check === true) {
            console.log('data invalida, tente novamente');
        }
        console.log('atividade adicionada com sucesso. Insira outra atividade ou digite sair');
    }
}
