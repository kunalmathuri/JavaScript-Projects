let temperature = [];
function addTemp() {
  const input = document.getElementById("temp");
  const inputValue = parseInt(input.value);
  if (!isNaN(inputValue)) {
    temperature.push(inputValue);
    const inputTempList = document.createElement("li");
    inputTempList.textContent = ` Celsius Temperature:${inputValue}`;
    document.getElementById("inputtemp").appendChild(inputTempList);
    input.value = "";
  }
}
function convertToFahrenheit() {
  finalTemp = document.getElementById("outputtemp");
  finalTemp.innerHTML = "";
  const fahrenheitTemp = temperature.map((temp) => (temp * 9) / 5 + 32);
  fahrenheitTemp.forEach((temp) => {
    const outputTempList = document.createElement("li");
    outputTempList.textContent = `Fahrenheit Temperature:${temp}`;
    document.getElementById("outputtemp").appendChild(outputTempList);
  });
}
