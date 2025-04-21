let buggyCart = [];
function addItem() {
  const input = document.getElementById("itemQuantity");
  const value = parseInt(input.value);
  if (!isNaN(value)) {
    const buggyValue = Math.floor(value / 2);
    buggyCart.push(buggyValue);
    const listItem = document.createElement("li");
    listItem.textContent = `Quantity: ${buggyValue}`;
    document.getElementById("buggyCartList").appendChild(listItem);
    input.value = "";
  }
}

function fixCart() {
  const fixedCartList = document.getElementById("fixedCartList");
  fixedCartList.innerHTML = "";
  const correctedCart = buggyCart.map((qty) => qty * 2);
  correctedCart.forEach((qty) => {
    const correctedListItem = document.createElement("li");
    correctedListItem.textContent = `quantity: ${qty}`;
    fixedCartList.appendChild(correctedListItem);
  });
}
