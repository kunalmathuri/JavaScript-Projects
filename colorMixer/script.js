function ColorMixer(color1, color2) {
  const c1 = document.getElementById("color1").value.toLowerCase();
  const c2 = document.getElementById("color2").value.toLowerCase();

  let result;
  switch (true) {
    case (c1 === "red" && c2 === "blue") || (c1 === "blue" && c2 === "red"):
      result = "purple";
      break;
    case (c1 === "red" && c2 === "yellow") || (c1 === "yellow" && c2 === "red"):
      result = "orange";
      break;
    case (c1 === "blue" && c2 === "yellow") ||
      (c1 === "yellow" && c2 === "blue"):
      result = "green";
      break;
    default:
      result = "Invalid color combination";
  }
  document.getElementById("output").innerText = "Color Output :" + result;
}
