function increment(id) {
    var input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrement(id) {
    var input = document.getElementById(id);
    var value = parseInt(input.value);
    if (value > 0) {
        input.value = value - 1;
    }
}

function calcularItens(event) {
    event.preventDefault();

    // Obter valores do formulário
    var quantidadeHomens = parseInt(document.getElementById("homens").value);
    var quantidadeMulheres = parseInt(document.getElementById("mulheresAdultos").value);
    var quantidadeCriancas = parseInt(document.getElementById("criancas").value);
    var quantidadeBebem = parseInt(document.getElementById("pessoasBebem").value);

    // Calcular quantidades de itens
    var quantidadeCarne = 0.4 * quantidadeHomens + 0.32 * quantidadeMulheres + 0.2 * quantidadeCriancas;
    var quantidadePaoDeAlho = 2 * quantidadeMulheres + 1 * quantidadeCriancas;
    var quantidadeCarvao = quantidadeHomens + quantidadeMulheres + quantidadeCriancas;
    var quantidadeSal = 0.04 * (quantidadeHomens + quantidadeMulheres + quantidadeCriancas);
    var quantidadeGelo = Math.ceil(quantidadeHomens / 10) * 5;
    var quantidadeRefrigerante = Math.ceil((quantidadeHomens + quantidadeMulheres + quantidadeCriancas) / 5);
    var quantidadeAgua = Math.ceil((quantidadeHomens + quantidadeMulheres + quantidadeCriancas) / 5);
    var quantidadeCerveja = 3 * quantidadeBebem;

    // Montar parâmetros da URL
    var params = new URLSearchParams();
    params.append("quantidadeCarne", quantidadeCarne.toFixed(2));
    params.append("quantidadePaoDeAlho", quantidadePaoDeAlho);
    params.append("quantidadeCarvao", quantidadeCarvao);
    params.append("quantidadeSal", quantidadeSal.toFixed(2));
    params.append("quantidadeGelo", quantidadeGelo);
    params.append("quantidadeRefrigerante", quantidadeRefrigerante);
    params.append("quantidadeAgua", quantidadeAgua);
    params.append("quantidadeCerveja", quantidadeCerveja);

    // Construir a URL com os parâmetros
    var url = "resultado.html?" + params.toString();

    // Redirecionar para a nova página
    window.location.href = url;
}

// Adiciona um ouvinte de evento ao botão "Calcular"
document.getElementById("churrascoForm").addEventListener("submit", calcularItens);
