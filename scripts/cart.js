document.addEventListener("DOMContentLoaded", () => {
    const cartCount = localStorage.getItem("cartCount") || 0;
    document.getElementById("cart-count").textContent = cartCount;

    // Tab behavior for Description / Reviews / Related
    const tabButtons = document.querySelectorAll("button[aria-label^='Show'], button[aria-label^='Read'], button[aria-label^='View']");
    const sections = document.querySelectorAll("main > section > div"); // Select description, reviews, and related

    tabButtons.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sections.forEach((sec, index) => {
                sec.style.display = index === i ? "block" : "none";
            });
        });
    });

    // Show only first tab content by default
    sections.forEach((sec, index) => {
        sec.style.display = index === 0 ? "block" : "none";
    });
});

function addToCart(productId) {
    const qty = parseInt(document.getElementById("quantity").value);
    let cartCount = parseInt(localStorage.getItem("cartCount")) || 0;
    cartCount += qty;
    localStorage.setItem("cartCount", cartCount);
    document.getElementById("cart-count").textContent = cartCount;

    // Show visual feedback (toast)
    showToast("Product added to cart!");
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

// Toast message
function showToast(message) {
    let toast = document.createElement("div");
    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.backgroundColor = "#333";
    toast.style.color = "#fff";
    toast.style.padding = "10px 20px";
    toast.style.borderRadius = "8px";
    toast.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";

    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = "1";
    }, 100);
    setTimeout(() => {
        toast.style.opacity = "0";
        setTimeout(() => document.body.removeChild(toast), 500);
    }, 2500);
}




