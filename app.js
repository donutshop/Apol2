let cart = [];
const currencySymbol = 'Php'; // Change this to the desired currency symbol
const cartItemsElement = document.querySelector('.cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');

// Add product to cart
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const name = event.target.getAttribute('data-name');
        const price = parseFloat(event.target.getAttribute('data-price'));
        addItemToCart(name, price);
    });
});

function addItemToCart(name, price) {
    const item = cart.find(product => product.name === name);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    cartItemsElement.innerHTML = cart.length === 0 ? '<p>No items in your cart yet.</p>' : '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `<p>${item.name} x${item.quantity} - ${currencySymbol}${(item.price * item.quantity).toFixed(2)}</p>`;
        cartItemsElement.appendChild(cartItemElement);
    });

    cartTotalElement.textContent = total.toFixed(2);
    cartCountElement.textContent = cart.length;
}

// Checkout Button Click
document.getElementById('checkout').addEventListener('click', () => {
    alert('Proceeding to payment');
    // Payment integration logic here
});
