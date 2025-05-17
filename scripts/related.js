const relatedProducts = [
  {
    name: "Organic Plantain",
    price: "₦3,500",
    image: "images/banana.jpg",
    alt: "Organic Plantain",
    link: "plantain.html"
  },
  {
    name: "Organic Sweet Potato",
    price: "₦4,000",
    image: "images/potato.jpg",
    alt: "Organic Sweet Potato",
    link: "sweet-potato.html"
  },
  {
    name: "Fresh Corn",
    price: "₦4,200",
    image: "images/corn.jpg",
    alt: "Fresh corn on the cob",
    link: "corn.html"
  },
  {
    name: "Organic Mango",
    price: "₦2,800",
    image: "images/mango.jpg",
    alt: "Seasonal organic mangoes",
    link: "mango.html"
  },
  {
    name: "Fresh Organic Cucumbers",
    price: "₦1,500",
    image: "images/cucumber.jpg",
    alt: "Fresh Organic Cucumber",
    link: "cucumber.html"
  },
  {
    name: "Organic Tomatoes",
    price: "₦3,000",
    image: "images/tomato.jpg",
    alt: "Organic Tomatoes",
    link: "tomato.html"
  }
];

function displayRelatedProducts() {
  const container = document.getElementById("related-products-container");

  relatedProducts.forEach(product => {
    const anchor = document.createElement("a");
    anchor.href = product.link;

    const figure = document.createElement("figure");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.alt;
    img.width = 250;

    const caption = document.createElement("figcaption");
    caption.textContent = `${product.name} – ${product.price}`;

    figure.appendChild(img);
    figure.appendChild(caption);
    anchor.appendChild(figure);
    container.appendChild(anchor);
  });
}

document.addEventListener("DOMContentLoaded", displayRelatedProducts);
