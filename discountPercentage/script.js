let cart = [];
function addPrice() {
  const originalPrice = parseFloat(
    document.getElementById("originalprice").value
  );
  const discountedPrice = parseFloat(
    document.getElementById("discountedprice").value
  );

  if (
    !isNaN(originalPrice) &&
    originalPrice > 0 &&
    !isNaN(discountedPrice) &&
    discountedPrice > 0 &&
    originalPrice > discountedPrice
  ) {
    cart.push({
      originalPrice: originalPrice,
      discountedPrice: discountedPrice,
    });

    const priceList = document.getElementById("priceList");
    const listPrice = document.createElement("li");
    listPrice.textContent = `Original Price: ${originalPrice}, Discounted Price: ${discountedPrice}`;
    priceList.appendChild(listPrice);
    document.getElementById("originalprice").value = "";
    document.getElementById("discountedprice").value = "";
  } else {
    alert("Please enter valid price values.");
  }
}

const calculatePercentageDiscount = () => {
  if (cart.length === 0) {
    document.getElementById("result").innerText = "No prices added yet.";
    return;
  }
  const latest = cart[cart.length - 1];
  const originalPrice = latest.originalPrice;
  const discountedPrice = latest.discountedPrice;
  const discount = originalPrice - discountedPrice;
  const percentageDiscount = ((discount / originalPrice) * 100).toFixed(2);
  document.getElementById("result").innerText = percentageDiscount + "%";
};
