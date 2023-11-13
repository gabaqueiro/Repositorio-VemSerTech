const numeroSecreto = Math.floor(Math.random() * 100) + 1;

while (true) {
    const palpite = parseInt(prompt("Adivinhe o número entre 1 e 100:"));

    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou. O número secreto era ${numeroSecreto}.`);
        break;
    } else if (palpite < numeroSecreto) {
        alert("O número é maior. Tente novamente.");
    } else {
        alert("O número é menor. Tente novamente.");
    }
}
