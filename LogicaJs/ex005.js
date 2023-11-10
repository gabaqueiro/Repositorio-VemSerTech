const ano = Number(prompt('Digite um ano:'));

let mensagem;

if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
    mensagem = 'Ano bissexto';
} else {
    mensagem = 'Não é um ano bissexto';
}

console.log(mensagem);
