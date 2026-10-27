function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator === "+") {
    return add(a, b);
  }
 else if (operator === "-"){
    return subtract(a,b);
 }
  else if (operator === "*"){
    return multiply(a,b);
 }
  else if (operator === "/"){
    return divide(a,b);
 }
}

const display = document.querySelector("#display");
const clear = document.querySelector("#clear");
const numberButtons = document.querySelectorAll(".number button");

let currentInput = "";
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput = currentInput + button.dataset.number;
    display.textContent = currentInput;
  });
});

clear.addEventListener("click", () => {
currentInput = "";
display.textContent = "0";
});

console.log(display)