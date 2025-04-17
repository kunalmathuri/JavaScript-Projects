let storedPassword = "";

const password = document.getElementById("button1");
password.addEventListener("click", () => {
  storedPassword = prompt("Enter your password:");
});
const confirmPassword = document.getElementById("button2");
confirmPassword.addEventListener("click", () => {
  const confirmPassword = prompt("confirm Your Password:");
  if (storedPassword === confirmPassword) {
    console.log("Password Matched. Password validation Successful.");
  } else {
    console.log("Password didn't match. Password validation unsuccessful.");
  }
});
