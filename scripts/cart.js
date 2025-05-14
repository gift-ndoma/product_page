document.addEventListener("DOMContentLoaded", () => {
    const cartCount = localStorage.getItem("cartCount") || 0;
    document.getElementById("cart-count").textContent = cartCount;
});

function addToCart(productId) {
    const qty = parseInt(document.getElementById("quantity").value);
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCount += qty;
    localStorage.setItem("cartCount", cartCount);
    document.getElementById("cart-count").textContent = cartCount;
}

function increaseQuantity() {
    const qtyInput = document.getElementById('quantity');
    qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decreaseQuantity() {
    const qtyInput = document.getElementById('quantity');
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}

function changeImage(src) {
    document.getElementById("mainImage").src = src;
}
