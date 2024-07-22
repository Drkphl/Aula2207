const prompt = require('prompt-sync')({ sigint: true });

Ferias = {
    acao: [],
    data: [],
};

let nome = prompt('qual o seu nome?');
let acao = prompt('o que você fez nas férias?');
let data = prompt('Que dia?');
acao.push(acao);
data.push(data);

console.log(`o usuario ${nome} realizou as seguintes atividades nas férias:`);
acao.forEach((index) => {
    console.log(`${acao[index]}, no dia ${data[index]}\n`);
});
