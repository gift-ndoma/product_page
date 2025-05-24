// cart-update.js

document.addEventListener("DOMContentLoaded", () => {
    const cartContainer = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("total-amount");
    const emptyMessage = document.getElementById("empty-cart-message");
    const checkoutSection = document.getElementById("checkout-section");
    const cartCount = document.getElementById("cart-count");

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        if (cartCount) cartCount.textContent = totalItems;
    }

    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
    }

    function calculateTotal() {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }

    function renderCart() {
        cartContainer.innerHTML = "";

        if (cart.length === 0) {
            emptyMessage.style.display = "block";
            checkoutSection.style.display = "none";
            updateCartCount();
            return;
        }

        emptyMessage.style.display = "none";
        checkoutSection.style.display = "block";

        cart.forEach((item, index) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");

            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>₦${(item.price * item.quantity).toLocaleString()}</p>
                    <div class="quantity-controls">
                        <button class="decrease" data-index="${index}">−</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-index="${index}">+</button>
                    </div>
                    <button class="remove" data-index="${index}">Remove</button>
                </div>
            `;

            cartContainer.appendChild(itemElement);
        });

        totalDisplay.textContent = `₦${calculateTotal().toLocaleString()}`;
        updateCartCount();
    }

    // Handle cart actions
    cartContainer.addEventListener("click", (event) => {
        const index = parseInt(event.target.getAttribute("data-index"));
        if (event.target.classList.contains("increase")) {
            cart[index].quantity += 1;
        } else if (event.target.classList.contains("decrease")) {
            if (cart[index].quantity > 1) {
                cart[index].quantity -= 1;
            } else {
                cart.splice(index, 1);
            }
        } else if (event.target.classList.contains("remove")) {
            cart.splice(index, 1);
        }

        saveCart();
        renderCart();
    });

    renderCart();
});
