const numero = Number(prompt('Digite um numero para saber se ele é par ou impar'));

if (numero % 2 === 0){
    console.log('É par');
} else {
    console.log('É ímpar');
}

const resultado = numero % 2 === 0 ? 'É par' : 'É ímpar';

console.log(resultado);