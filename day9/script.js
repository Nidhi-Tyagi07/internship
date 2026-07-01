const products = [
  {
    image: "1.jpg",
    name: " elegant floral gowm",
    description: "a beautiful floral gowm without sleeves.",
    price: "₹500,000",
  },
  {
    image: "2.jpg",
    name: "brown short dress",
    description: "A stylish brown short dress perfect for any occasion.",
    price: "₹25,000",
  },
  {
    image: "3.jpg",
    name: "blue puff sleeves gown",
    description: "Elegant blue puff sleeves gown with a delicate design.",
    price: "₹3,000",
  },
  {
    image: "4.jpeg",
    name: "floral soft pink dress ",
    description: "Elegant soft pink dress with a delicate floral design.",
    price: "₹5,000",
  },
  {
    image: "5.jpeg",
    name: "marron gown",
    description: "Elegant Marron gown with a delicate design.",
    price: "₹45,000",
  },
];

const cardContainer = document.getElementById("cardContainer");

cardContainer.innerHTML = products
  .map(
    (product) => `
      <div class="card">
        <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p class="price">${product.price}</p>
      </div>
    `
  )
  .join("");