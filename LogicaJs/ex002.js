const nota = Number(prompt('Digite a nota do aluno:'));

if (nota >= 90) {
    console.log('Aprovado com mérito');
} else if (nota >= 70) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

const mensagem = nota >= 90 ? 'Aprovado com mérito' : (nota >= 70 ? 'Aprovado' : 'Reprovado');

console.log(mensagem);
