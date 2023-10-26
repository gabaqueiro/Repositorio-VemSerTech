document.querySelector('.menu-toggle').addEventListener('click', function () {
    document.querySelector('.menu').classList.toggle('active');
});
$(document).ready(function () {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 2000, // Tempo de exibição de cada slide em milissegundos (2 segundos neste exemplo)
        dots: true, // Exibe os pontos de navegação abaixo do carrossel
    });
});
const cartToggle = document.querySelector('.cart-toggle');
const cart = document.querySelector('.cart');
const closeCartBtn = document.querySelector('.close-cart');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotal = document.getElementById('cart-total');
const clearCartBtn = document.querySelector('.clear-cart');

let cartItems = [];

cartToggle.addEventListener('click', () => {
    renderCartItems();
    cart.classList.toggle('active');
});

closeCartBtn.addEventListener('click', () => {
    cart.classList.remove('active');
});

clearCartBtn.addEventListener('click', () => {
    cartItems = [];
    renderCartItems();
    updateCartTotal();
});

function addToCart(itemName, itemPrice) {
    const newItem = { name: itemName, price: parseFloat(itemPrice) };
    cartItems.push(newItem);
    renderCartItems();
    updateCartTotal();
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    renderCartItems();
    updateCartTotal();
}

function renderCartItems() {
    cartItemsContainer.innerHTML = '';
    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>R$ ${item.price.toFixed(2)}</span>
            <button class="remove-item" onclick="removeFromCart(${index})">Remover</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);
    });
}

function updateCartTotal() {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    cartTotal.textContent = total.toFixed(2);
}
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        const itemName = this.getAttribute('data-nome');
        const itemPrice = parseFloat(this.getAttribute('data-valor'));
        addToCart(itemName, itemPrice);
    });
});

