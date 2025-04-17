let marks = [];

function collectMarks() {
  marks = [];
  for (let i = 1; i <= 5; i++) {
    let input = document.getElementById("Student" + i);
    let value = parseFloat(
      document.getElementById("Student" + i).value
    ); /*  add 'let' to declare variable value inside for loop, It limits the scope of value to just inside the loop, which is cleaner and safer, other wise it will become global variable*/
    if (!isNaN(value)) {
      /* If you're not sure the user has typed a number, you might want to check if it's a valid input*/
      marks.push(value);
    }
    input.value = "";
    input.disabled = true;
  }
  document.getElementById("highestmarks").innerText =
    "Marks submitted successfully!";
  return marks;
}

function findHighestMarks() {
  if (marks.length === 0) {
    document.getElementById("highestmarks").innerText =
      "Please enter marks first.";
    return;
  }
  let highestmarks = marks[0];
  for (let i = 1; i <= marks.length; i++) {
    highestmarks = marks[i] > highestmarks ? marks[i] : highestmarks;
  }

  document.getElementById("highestmarks").innerText =
    "Maximum marks is" + highestmarks;
}

function resetForm() {
  for (let i = 1; i <= 5; i++) {
    let input = document.getElementById("Student" + i);
    input.value = "";
    input.disabled = false;
  }
  marks = [];
  document.getElementById("highestmarks").innerText = "";
}
