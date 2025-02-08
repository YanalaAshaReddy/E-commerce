document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-container");

    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.title}">
                    <h3>${product.title}</h3>
                    <p>${product.description.substring(0, 50)}...</p>
                    <p><strong>$${product.price}</strong></p>
                    <button>Add to Cart</button>
                `;

                productContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error fetching products:", error));
});
