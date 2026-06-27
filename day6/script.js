const products = [
  {
    image: "1.jpeg",
    name: " Green Diamond Necklace Set",
    description: "Elegant necklace with multiple layers of emerald green faux diamonds.",
    price: "₹500,000",
  },
  {
    image: "2.jpeg",
    name: "flower choker necklace",
    description: "Elegant gold teardrop flower choker necklace. A perfect treat yourself gift or a gift for a loved one!",
    price: "₹25,000",
  },
  {
    image: "3.jpeg",
    name: "blue pearl necklace",
    description: "Elegant blue pearl necklace with a delicate chain.",
    price: "₹3,000",
  },
  {
    image: "4.jpeg",
    name: "elegant soft green Choker ",
    description: "Elegant soft green Choker with a delicate design.",
    price: "₹5,000",
  },
  {
    image: "5.jpeg",
    name: "Necklace Set, White Gold Plated Choker",
    description: "Elegant necklace set with a white gold plated choker.",
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