function calculateRental() {
  const days = document.getElementById("days");
  const daysValue = days.value;
  const carType = document.getElementById("carType");
  const carTypeValue = carType.value;
  let dailyRate;
  switch (carTypeValue) {
    case "eonomy":
      dailyRate = 4000;
      break;
    case "midsize":
      dailyRate = 10000;
      break;
    case "luxury":
      dailyRate = 20000;
      break;
    default:
      document.getElementById("result").innerText = "Invalid CarType";
      return;
  }
  if (isNaN(daysValue) || daysValue <= 0) {
    document.getElementById("result").innerText =
      "Please Enter a valid no. of days";
    days.value = "";
    carType.value = "";
    return;
  }

  const totalCost = daysValue * dailyRate;
  document.getElementById(
    "result"
  ).innerText = `Total cost for ${daysValue} days in a ${carTypeValue} car is Rs. ${totalCost}/-`;
  days.value = "";
  carType.value = "";
}
