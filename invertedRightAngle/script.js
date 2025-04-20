function drawTriangle() {
  const i = parseInt(document.getElementById("rows").value);
  let pattern = "";
  for (let row = i; row >= 1; row--) {
    pattern += "*".repeat(row) + "\n";
  }
  document.getElementById("output").innerText = pattern;
}
