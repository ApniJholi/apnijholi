const products = [];

// Generate 50 products automatically
for (let i = 1; i <= 50; i++) {
  products.push({
    id: i,
    name: `Product ${i}`,
    price: Math.floor(Math.random() * 2000) + 200,
    discount: Math.floor(Math.random() * 30) + 10,
    image: `https://picsum.photos/200/200?random=${i}`,
    link: `https://www.amazon.in/s?k=product+${i}`
  });
}

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src=\"${product.image}\" alt=\"${product.name}\">
    <h3>${product.name}</h3>
    <p>Price: <del>₹${product.price}</del> <b>₹${product.price - (product.price * product.discount / 100)}</b></p>
    <p>Discount: ${product.discount}%</p>
    <button onclick=\"addToCart(${product.id})\">Add to Cart</button>
    <a href=\"${product.link}\" target=\"_blank\"><button>Buy Now</button></a>
  `;
  productList.appendChild(div);
});

let cart = [];

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price - (item.price * item.discount / 100);
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });

  document.getElementById("cart-total").textContent = `Total: ₹${total}`;
}
