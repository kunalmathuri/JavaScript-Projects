function capitalizeFirstLetter(name) {
  return name.length > 0 && name[0] === name[0].toLowerCase()
    ? name[0].toUpperCase()
    : name[0];
}
document.getElementById("nameForm").addEventListener("submit", function (e) {
  e.preventDefault();
  /*nameInput is a string, so you can’t use .value = "" on it.
  You should store the input "element", not its value, if you want to clear it later.*/
  const nameInput = document.getElementById("name");
  const nameValue = nameInput.value.trim(); // Remove whitespace

  if (nameValue === "") {
    nameInput.style.border = "2px solid red"; // Highlight if empty
    document.getElementById("output").innerText = "Please enter a name!";
    return;
  } else {
    nameInput.style.border = "1px solid black"; // Reset border if okay (during when we click input field to write something)
  }

  const result =
    capitalizeFirstLetter(
      nameValue
    ); /* if result is not declared with let or const.
  This makes it a global variable unintentionally — best to always declare variables anywhere you created it!*/
  document.getElementById("output").innerText =
    "Formatted name:" + result + nameValue.slice(1);
  nameInput.value = ""; // clear the input field
});
