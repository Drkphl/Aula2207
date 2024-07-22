const prompt = require('prompt-sync')({ sigint: true });
const { checkData, listar, adicionar } = require('./Ferias_Modulos');


nome = prompt('qual o seu nome?');

while (true) {
    console.log(`selecione a opção desejada:\n1 - adicionar atividade\n2 - listar atividades`);
    opcao = Number(prompt());

    switch (opcao) {
        case 1:
            adicionar();
            checkData(data);
            break;
        case 2:
            listar();
            process.exit();
            break;
        default:
            console.log('opção invalida');
            break;
    }
}
