const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const maxTentativas = 7;

while (tentativas < maxTentativas) {
    const palpite = parseInt(prompt(`Tentativa ${tentativas + 1}/${maxTentativas}: Adivinhe o número entre 1 e 100:`));

    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou. O número secreto era ${numeroSecreto}.`);
        break;
    } else if (palpite < numeroSecreto) {
        alert("O número é maior. Tente novamente.");
    } else {
        alert("O número é menor. Tente novamente.");
    }

    tentativas++;
}

if (tentativas === maxTentativas) {
    alert(`Suas ${maxTentativas} tentativas acabaram. O número correto era ${numeroSecreto}.`);
}
