let cart = [];
function addToCart(item) {
  cart.push(item);
  const uniqueCart = [...new Set(cart)];

  cartList = document.getElementById("cartList");
  cartList.innerHTML = ""; // Clear the current list before re-rendering
  uniqueCart.forEach((cartItem) => {
    listItem = document.createElement("li");
    listItem.textContent = cartItem;
    cartList.appendChild(listItem);
  });
}
