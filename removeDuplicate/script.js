let cart = [];
function addToCart(item) {
  cart.push(item);
  const uniqueCart = [...new Set(cart)];

  const cartList = document.getElementById("cartList");
  cartList.innerHTML = ""; // Clear the current list before re-rendering
  uniqueCart.forEach((cartItem) => {
    const listItem = document.createElement("li");
    listItem.textContent = cartItem;
    cartList.appendChild(listItem);
  });
}
