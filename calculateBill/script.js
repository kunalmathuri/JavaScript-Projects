let dishCart = [];
function addDishes(item) {
  dishCart.push(item);
  const uniqueDishCart = [...new Set(dishCart)];
  const cartList = document.getElementById("dishList");
  cartList.innerHTML = "";
  uniqueDishCart.forEach((dishes) => {
    const listItem = document.createElement("li");
    listItem.textContent = dishes;
    cartList.appendChild(listItem);
  });
}
function calculateBill() {
  const pricesOfDishCart = dishCart.map(Number);
  const totalPerson = document.getElementById("person").value;
  if (isNaN(totalPerson) || totalPerson <= 0) {
    document.getElementById("totalbill").innerText =
      "Please enter valid no. of Person!";
    return;
  }
  const totalBill = pricesOfDishCart.reduce((sum, cost) => sum + cost, 0);
  const billPerPerson = totalBill / totalPerson;
  document.getElementById("totalbill").innerText = totalBill;
  document.getElementById("billperperson").innerText = billPerPerson;
}
