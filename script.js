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

clear.addEventListener("click", () => {
currentInput = "";
display.textContent = "0";
firstNumber = null;
operator = "";
});

const operatorButtons = document.querySelectorAll(".operator button");
let firstNumber = null;
let operator = "";

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
  if (currentInput === "") {
      if (operator !== "") {
        operator = button.dataset.operator;
      }
      return;
    }
  if (operator !== "") {
    const result = calculate();
    if (result === null) {
      return;
    }
    firstNumber = result;
    } else {
      firstNumber = +currentInput;
    }

    operator = button.dataset.operator;
    currentInput = "";
    justCalculated = false;
  });
});

const equals = document.querySelector("#equals");
let justCalculated = false;

function calculate() {
  const secondNumber = +currentInput;
  if(operator === "/" && secondNumber === 0){
    justCalculated = true;
    return null;
  }
  const result = operate(operator,firstNumber,secondNumber);
  const rounded = Math.round(result * 1000) / 1000;
  return rounded; 
}

equals.addEventListener("click", () => {
   if(operator === ""){
    display.textContent = "undefined";
    return display.textContent;
  }
  const result = calculate();
  display.textContent = result;
  justCalculated = true;
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (justCalculated === true) {
      currentInput = "";
      firstNumber = null;
      operator = "";
      justCalculated = false;
    }
    currentInput = currentInput + button.dataset.number;
    display.textContent = currentInput;
  });
});