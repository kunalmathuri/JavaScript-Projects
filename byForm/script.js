document
  .getElementById("passwordForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from submitting

    const enteredPassword = document.getElementById("password").value;
    const confirmenteredPassword =
      document.getElementById("confirmPassword").value;
    if (enteredPassword === confirmenteredPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful.");
    }
  });
