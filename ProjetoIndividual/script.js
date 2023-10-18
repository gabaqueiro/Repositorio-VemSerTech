const menuTable = document.getElementById('menu');
const productForm = document.getElementById('product-form');

productForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('product-name').value;
    const productDescription = document.getElementById('product-description').value;
    const productImage = document.getElementById('product-image').value;

    // Criar uma nova linha na tabela do menu
    const newRow = menuTable.insertRow();
    newRow.innerHTML = `
        <td><img src="${productImage}" alt="${productName}" style="width: 100px;"></td>
        <td>${productName}</td>
        <td>${productDescription}</td>
    `;

    // Limpar o formulário
    productForm.reset();
});
