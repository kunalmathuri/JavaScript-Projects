// function vowelCounter() {
//   const name = document.getElementById("name");
//   const nameValue = name.value;
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let char of nameValue) {
//     count += vowels.includes(char) ? 1 : 0;
//   }
//   name.value = "";
//   return (document.getElementById(
//     "output"
//   ).innerText = `no. of vowels in ${nameValue}: ${count}`);
// }
function vowelCounter(kunal) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of kunal) {
    count += vowels.includes(char) ? 1 : 0;
  }
  return (document.getElementById(
    "output"
  ).innerText = `no. of vowels in ${kunal}: ${count}`);
}
