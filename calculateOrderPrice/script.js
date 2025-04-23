let cart = [];

function addItem() {
  const price = parseFloat(document.getElementById("unitprice").value);
  const quantity = parseInt(document.getElementById("quantity").value);
  const output = document.getElementById("output");
  if (!isNaN(price) && price > 0 && !isNaN(quantity) && quantity > 0) {
    cart.push({ unitPrice: price, quantity: quantity });

    const cartList = document.getElementById("cartList");
    const listItem = document.createElement("li");
    listItem.textContent = `Price: ${price}, Quantity: ${quantity}`;
    cartList.appendChild(listItem);
    document.getElementById("unitprice").value = "";
    document.getElementById("quantity").value = "";
    output.innerText = "";
  } else {
    output.innerText = "❗ Please enter a valid, positive price and quantity.";
  }
}
const calculateTotal = () => {
  const total = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );
  document.getElementById("totalcost").innerText = `Total Cost : ${total}`;
};
