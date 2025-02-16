const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = ""; // Stores the current input
let operator = null; // Stores the selected operator
let firstOperand = ""; // Stores the first operand
let secondOperand = ""; // Stores the second operand

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      // Clear the calculator
      currentInput = "";
      operator = null;
      firstOperand = "";
      secondOperand = "";
      display.value = "";
    } else if (value === "=") {
      // Perform calculation
      if (operator && firstOperand && currentInput) {
        secondOperand = currentInput;
        const result = calculate(
          parseFloat(firstOperand),
          parseFloat(secondOperand),
          operator
        );
        display.value = result;
        currentInput = result;
        operator = null;
        firstOperand = "";
        secondOperand = "";
      }
    } else if (["+", "-", "*", "/"].includes(value)) {
      // Handle operator selection
      if (currentInput) {
        operator = value;
        firstOperand = currentInput;
        currentInput = "";
      }
    } else {
      // Handle number and decimal input
      currentInput += value;
      display.value = currentInput;
    }
  });
});

// Function to perform calculations
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
}