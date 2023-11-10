const lado1 = Number(prompt('Digite o comprimento do primeiro lado:'));
const lado2 = Number(prompt('Digite o comprimento do segundo lado:'));
const lado3 = Number(prompt('Digite o comprimento do terceiro lado:'));

if (lado1 === lado2 && lado2 === lado3) {
    console.log('Triângulo Equilátero');
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log('Triângulo Isósceles');
} else {
    console.log('Triângulo Escaleno');
}
