const numberArray = [];
function checkDivisibleby3() {
  const input = document.getElementById("numberInput");
  //   inputValue = input.value;
  const inputValue = parseInt(input.value);

  if (!isNaN(inputValue)) {
    numberArray.push(inputValue);
  }
  const outputList = document.getElementById("outputList");
  outputList.innerHTML = "";
  for (let i = 0; i < numberArray.length; i++) {
    const num = numberArray[i];
    if (num % 3 !== 0 || num % 2 === 0) {
      continue;
    }
    const listItem = document.createElement("li");
    listItem.textContent = num;
    outputList.appendChild(listItem);
  }
  input.value = "";
}
