// DESAFIO 01

let soma1 = 0;

for (let i = 1; i <= 10; i++) {
    soma1 = soma1 + i 
}

console.log("A soma dos números de 1 a 10 é:", soma1);

// DESAFIO 02

let pessoa = {
    nome: "Gabriela",
    idade: 24,
    cidade: "Salvador"
};

for (let propriedade in pessoa) {
    console.log(propriedade + ": " + pessoa[propriedade]);
}

// DESAFIO 03

let frutas = ["Maçã", "Banana", "Morango", "Biri-Bri", "Pinha"];

for (let fruta of frutas) {
    console.log(fruta);
}

// DESAFIO 04

let numero = prompt("Digite um número para a tabuada:");
numero = parseInt(numero);

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} X ${i} = ${resultado}`);
}

//DESAFIO 05

let valores = {
    valor1: 10,
    valor2: 20,
    valor3: 30,
    valor4: 40
  };
  
  let soma = 0;
  
  for (let propriedade in valores) {
    soma = soma + valores[propriedade];
  }
  
  console.log("A soma dos valores é: " + soma);

// DESAFIO 06

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log(array[i] === 7 ? `Achei o número 7 na posição ${i}` : `O número 7 não está na posição ${i}`);
}


// DESAFIO 07

let numeroEntrada = 7;
let arraySoma = [];

for (let i = 0; i < numeroEntrada; i++) {
  if (i <= 1) {
    arraySoma.push(1);
  } else {
    arraySoma.push(arraySoma[i - 1] + arraySoma[i - 2]);
  }
}

console.log(`Os primeiros ${numeroEntrada} termos da sequência de Fibonacci são: ${arraySoma.join(', ')}`);

// DESAFIO 08

let somaDeVogais = 0;
const vogais = ['a', 'e', 'i', 'o', 'u'];

const palavra = prompt('Digite uma palavra: ');
const palavraSeparada = palavra.toLowerCase().split('');

for (let letra of palavraSeparada) {
  if (vogais.includes(letra)) {
    somaDeVogais = somaDeVogais + 1;
  }
}

console.log(`A palavra "${palavra}" contém ${somaDeVogais} vogais.`);

// DESAFIO 09

let meuArray = [5, 4, 6, 7, 2, 8, 3, 9, 1];

for (let i = 0; i < meuArray.length; i++) {
    for (let j = 0; j < meuArray.length - 1 - i; j++) {
        if (meuArray[j] > meuArray[j + 1]) {
            [meuArray[j], meuArray[j + 1]] = [meuArray[j + 1], meuArray[j]];
        }
    }
}

console.log("Array ordenado:", meuArray);


//DESAFIO 09.01

console.log(array3.sort((a, b) => a - b));

// DESAFIO 10

const qntDados = 5;
let somaDosValores = 0;

for (let i = 0; i < qntDados; i++) {
    const rolagem = Math.floor(Math.random() * 6) + 1;
    console.log(rolagem);
    somaDosValores = somaDosValores + rolagem;
}

console.log(somaDosValores);

// DESAFIO 11

const qntDados2 = 5;
const qntLados = 2;
let somaDosValores2 = 0;

for (let i = 0; i < qntDados2; i++) {
    const rolagem = Math.floor(Math.random() * qntLados) + 1;
    console.log(`Dado ${i + 1}: ${rolagem}`);
    somaDosValores2 = somaDosValores2 + rolagem;
}

console.log(`Soma dos ${qntDados2} dados com ${qntLados} lados: ${somaDosValores2}`);

//DESAFIO 12

const qntDados3 = 3;
const qntLados2 = 9;
const numeroTentativas = 3;

for (let tentativa = 0; tentativa < numeroTentativas; tentativa++) {
    console.log(`Tentativa ${tentativa + 1}: `);
    let somaDosValores3 = 0;

    for (let i = 0; i < qntDados3; i++) {
        const rolagem = Math.floor(Math.random() * qntLados2) + 1;
        console.log(`Dado ${i + 1}: ${rolagem}`);
        somaDosValores3 = somaDosValores3 + rolagem;
    }

    console.log(`Soma dos valores: ${somaDosValores3}`);
}

