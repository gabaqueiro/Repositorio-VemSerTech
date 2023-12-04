// DESAFIO 01 


class OperacoesMatematicas {
    static soma(num1, num2) {
        return num1 + num2;
    }

    static subtracao(num1, num2) {
        return num1 - num2;
    }

    static divisao(num1, num2) {
        return num1 / num2;
    }

    static multiplicacao(num1, num2) {
        return num1 * num2;
    }
}

console.log(`Resultado da soma: ${OperacoesMatematicas.soma(10, 20)}`);
console.log(`Resultado da subtração: ${OperacoesMatematicas.subtracao(10, 20)}`);
console.log(`Resultado da divisão: ${OperacoesMatematicas.divisao(10, 20)}`);
console.log(`Resultado da multiplicação: ${OperacoesMatematicas.multiplicacao(10, 20)}`);


// DESAFIO 02

class Circulo {
    static calcularArea(raio) {
        if (raio < 0) {
            throw new Error("O raio deve ser um número não negativo.");
        }
        return Math.PI * Math.pow(raio, 2);
    }

    static calcularCircunferencia(raio) {
        if (raio < 0) {
            throw new Error("O raio deve ser um número não negativo.");
        }
        return 2 * Math.PI * raio;
    }
}

try {
    console.log(`Área do círculo: ${Circulo.calcularArea(10)}`);
    console.log(`Circunferência do círculo: ${Circulo.calcularCircunferencia(10)}`);
} catch (error) {
    console.error(error.message);
}

// DESAFIO 04

class FiguraGeometrica {
    constructor(cor, tipoFigura) {
        this.cor = cor;
        this.tipoFigura = tipoFigura;
    }

    calcularArea() {
        return "Cálculo de área";
    }
}

class Quadrado extends FiguraGeometrica {
    constructor(base, altura, tipoFigura, cor) {
        super(cor, tipoFigura);
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        if (this.base <= 0 || this.altura <= 0) {
            throw new Error("Base e altura devem ser números positivos.");
        }
        return this.base * this.altura;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(base, altura, tipoFigura, cor) {
        super(cor, tipoFigura);
        this.base = base;
        this.altura = altura;
    }

    calcularArea() {
        if (this.base <= 0 || this.altura <= 0) {
            throw new Error("Base e altura devem ser números positivos.");
        }
        return (this.base * this.altura) / 2;
    }
}

class Circulo extends FiguraGeometrica {
    constructor(raio, cor, tipoFigura) {
        super(cor, tipoFigura);
        this.raio = raio;
    }

    calcularArea() {
        if (this.raio <= 0) {
            throw new Error("O raio deve ser um número positivo.");
        }
        return Math.PI * Math.pow(this.raio, 2);
    }
}

const quadrado1 = new Quadrado(20, 20, "quadrado", "vermelho");
console.log(quadrado1);
console.log(`Cálculo da área: ${quadrado1.calcularArea()}`);

const triangulo1 = new Triangulo(20, 20, "triângulo", "azul");
console.log(triangulo1);
console.log(`Cálculo de área: ${triangulo1.calcularArea()}`);

const circulo1 = new Circulo(30, "preto", "círculo");
console.log(circulo1);
console.log(`Cálculo de área: ${circulo1.calcularArea()}`);


// DESAFIO 05

class Animal {
    constructor(nome, idade, especie) {
        this.nome = nome;
        this.idade = idade;
        this.especie = especie;
    }

    imprimirDados() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Espécie: ${this.especie}`);
    }

    emitirSom() {
        console.log('O animal faz um som.');
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, especie, tamanho) {
        super(nome, idade, especie);
        this.tamanho = tamanho;
    }

    emitirSom() {
        console.log('Au au!');
    }
}

class Gato extends Animal {
    constructor(nome, idade, especie, cor) {
        super(nome, idade, especie);
        this.cor = cor;
    }

    emitirSom() {
        console.log('Miau!');
    }
}

const cachorro = new Cachorro('Rex', 3, 'Canino', 'Grande');
const gato = new Gato('Frajola', 2, 'Felino', 'Preto');

cachorro.imprimirDados();
cachorro.emitirSom();

gato.imprimirDados();
gato.emitirSom();
