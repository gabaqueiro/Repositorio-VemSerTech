const mes = prompt('Digite o nome de um mês:').toLowerCase();

let estacao;

switch (mes) {
    case 'dezembro':
    case 'janeiro':
    case 'fevereiro':
        estacao = 'Inverno';
        break;
    case 'março':
    case 'abril':
    case 'maio':
        estacao = 'Primavera';
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        estacao = 'Verão';
        break;
    case 'setembro':
    case 'outubro':
    case 'novembro':
        estacao = 'Outono';
        break;
    default:
        console.log('Mês inválido');
}

if (estacao) {
    console.log(`A estação do ano correspondente a ${mes} é ${estacao}.`);
}
