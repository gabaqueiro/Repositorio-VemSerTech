const idade = Number(prompt('Digite a sua idade:'));

if (idade >= 18) {
    console.log('Você pode comprar bebidas alcoólicas.');
} else {
    console.log('Você não pode comprar bebidas alcoólicas.');
}

const mensagem = idade >= 18 ? 'Você pode comprar bebidas alcoólicas.' : 'Você não pode comprar bebidas alcoólicas.';

console.log(mensagem);