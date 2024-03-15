document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('.cart-items');
    const totalPrice = document.querySelector('.total-price');
    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const price = parseFloat(button.getAttribute('data-price'));
            total += price;
            totalPrice.textContent = `$${total.toFixed(2)}`;

            const itemName = button.previousElementSibling.textContent;
            const li = document.createElement('li');
            li.textContent = itemName;
            cartItems.appendChild(li);
        });
    });
});
