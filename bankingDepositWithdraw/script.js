let customer = [];
function addCustomerAmount() {
  const customerName = document.getElementById("customer").value;
  const amount = parseFloat(document.getElementById("amount").value);
  if (
    !isNaN(amount) &&
    amount > 0 &&
    isNaN(customerName) &&
    customerName.value !== ""
  ) {
    customer.push({
      customerName: customerName,
      balance: amount,
    });
    const customerList = document.getElementById("details");
    const listItem = document.createElement("li");
    listItem.textContent = `Customer Name: ${customerName}, Balance: ${amount}`;
    customerList.appendChild(listItem);
  }
}
function deposit() {
  const depositamount = parseFloat(
    document.getElementById("depositamount").value
  );
  if (isNaN(depositamount) || depositamount <= 0) {
    document.getElementById("deposit").innerText =
      "Deposit amount must be greater than zero.";
    return;
  }
  const latest = customer[customer.length - 1];
  if (latest) {
    latest.balance += depositamount;
    document.getElementById(
      "deposit"
    ).innerText = `Deposited ${depositamount} to ${latest.customerName}. New Balance: ${latest.balance}`;
  }
}
function withdraw() {
  const withdrawAmount = parseFloat(
    document.getElementById("withdrawamount").value
  );
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    document.getElementById("withdraw").innerText =
      "Deposit amount must be greater than zero.";
    return;
  }
  const latest = customer[customer.length - 1];
  if (
    withdrawAmount > 0 &&
    latest.balance > 0 &&
    withdrawAmount <= latest.balance
  ) {
    latest.balance -= withdrawAmount;
    document.getElementById(
      "withdraw"
    ).innerText = `Withdrawal ${withdrawAmount} by ${latest.customerName}. New Balance: ${withdrawAmount}`;
  }
}
