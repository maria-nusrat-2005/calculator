const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";  // clear
    } 
    else if (value === "=") {
      try {
        display.value = eval(display.value); // calculate expression
      } catch {
        display.value = "Error"; // if invalid
      }
    } 
    else {
      display.value += value; // append number/operator
    }
  });
});
