const currentValue = document.querySelector("#screen-current");
const previousValue = document.querySelector("#screen-previous");
const operators = ["-", "+", "*", "/"];
const btnPlus = document.querySelector("#plus");
const btnMinus = document.querySelector("#minus");
const btnTimes = document.querySelector("#times");
const btnDivisor = document.querySelector("#division");
const btnPercent = document.querySelector("#percent");
const btnDot = document.querySelector("#dot");
const btnEqual = document.querySelector("#equal");
const btnCleaner = document.querySelector("#clean");
const btnBackspaceBtn = document.querySelector("#backspace");
const numbers = document.querySelectorAll(".button-pad__btn--number");

btnPercent.onclick = calculatePercentage;
btnPlus.onclick = () => filterOperator("+");
btnMinus.onclick = () => filterOperator("-");
btnTimes.onclick = () => filterOperator("*");
btnDivisor.onclick = () => filterOperator("/");
btnDot.onclick = () => filterDot(",");
btnEqual.onclick = result;
btnCleaner.onclick = clean;
btnBackspaceBtn.onclick = backspace;
numbers.forEach((number) => number.addEventListener("click", () => insert(number.textContent)));



function insert(value) {
      if (currentValue.textContent.length > 20) {
            return;
      }
      if(currentValue.textContent === "0" && !operators.includes(value)){
            currentValue.textContent = value;
      } else{
            currentValue.textContent += value;
      }
}
function clean() {
      if(currentValue.textContent === "0"){
            previousValue.textContent = "";
      }
      currentValue.textContent = "0";
}
function backspace() {
      if (currentValue.textContent) {
            currentValue.textContent = currentValue.textContent.slice(0, -1);
      }
}
function result() {
      if (currentValue.textContent !== "ERRO") {
            tryEval(currentValue.textContent);
            previousValue.textContent = currentValue.textContent;
      }
}
function tryEval(expression) {
      const expressionFilterd = expression.replaceAll(",",".")
      try {
            currentValue.textContent = eval(expressionFilterd).toString().replaceAll(".",",");
      } catch {
            currentValue.textContent = "ERRO";
      }
}

function filterDot(dot) {
      const numbers = currentValue.textContent.split(new RegExp("[\-+\*\/]"));
      if (numbers[numbers.length - 1].includes(dot)) {
            return;
      } else {
            insert(dot);
      }
}
function filterOperator(operator) {
      const lastChar = currentValue.textContent[currentValue.textContent.length - 1];
      if (lastChar === operator) {
            return;
      }
      if (operators.includes(lastChar)) {
            currentValue.textContent = currentValue.textContent.slice(0, -1) + operator;
      } else {
            insert(operator);
      }
}

function calculatePercentage() {
      const inputString = currentValue.textContent.replaceAll(",", ".");
      const inputArray = inputString.match(/(\d+(?:\.\d+)?)|([+\-\*\/])/g);
      const { length } = inputArray;
      const baseString = inputArray.slice(0, length - 2).join("");
      const baseValue = eval(baseString);
      const operator = inputArray[length - 2];
      const percentageValue = inputArray[length - 1];
      const result = calculatePercentageValue(baseValue, operator, percentageValue);
      currentValue.textContent = result.toString().replaceAll(".", ",");
      previousValue.textContent = currentValue.textContent;
}


function calculatePercentageValue(number, operator, percentageValue) {
      if(!number){ return (+percentageValue / 100);}
      const value = +number
      if(operator === "+"){
            return (value + value * percentageValue / 100);
      } else if(operator === "-"){
            return (value - value * percentageValue / 100);
      } else if(operator === "*"){
            return (value * percentageValue / 100);
      } else if(operator === "/"){
            return (value / percentageValue * 100);
      }
}



