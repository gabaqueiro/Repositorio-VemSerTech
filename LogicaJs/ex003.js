const primeiroNumero = Number(prompt('Digite o primeiro número'));
const segundoNumero = Number(prompt('Digite o segundo número'));
const terceiroNumero = Number(prompt('Digite o terceiro número'));

let maiorNumero;

if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
  maiorNumero = primeiroNumero; 
} else if (segundoNumero > primeiroNumero && segundoNumero > terceiroNumero) {
  maiorNumero = segundoNumero;
} else {
  maiorNumero = terceiroNumero;
}

console.log(`O maior número é: ${maiorNumero}`);

let maiorNumeroTernario = 
  primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero 
    ? primeiroNumero 
    : segundoNumero > terceiroNumero 
      ? segundoNumero 
      : terceiroNumero;

console.log(`O maior número é: ${maiorNumeroTernario}`);