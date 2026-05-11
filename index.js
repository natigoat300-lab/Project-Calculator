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

let num1 = "";
let operator = "";
let num2 = "";

function operate() {
    // Convert strings to actual numbers here
    const n1 = Number(num1);
    const n2 = Number(num2);
    if (operator == "+") return add(n1, n2);
    else if (operator == "-") return subtract(n1, n2);
    else if (operator == "×") return multiply(n1, n2);
    else if ( operator == "÷") return divide(n1, n2);
}
// display user input and calculation result
const displayResult = document.querySelector('p')
//user input operator 
const inputOperator = document.querySelectorAll(".operator")
inputOperator.forEach(operatorBtns => {
    operatorBtns.addEventListener("click", function(e) {
        operator = e.target.textContent;
        displayResult.textContent = `${num1}${operator}${num2}`
    })
})
// user input number update
const inputNumber = document.querySelectorAll(".number")
inputNumber.forEach(numBtns => {
    numBtns.addEventListener("click", function(e) {
        if (operator == "") {
            num1 += e.target.textContent;

        }else {
            num2 += e.target.textContent;
       }
         displayResult.textContent = `${num1}${operator}${num2}`
    })
})
// equalt to buttondisplayResult.textContent
let result = "";
const equalTo = document.querySelector(".brown")
equalTo.addEventListener("click", () => {
    result = operate();
    displayResult.textContent = `${num1}${operator}${num2} = ${result}`
    num1 = "";
    num2 = "";
    operator = "";
}
)
// clear number
const clearNumberBtn = document.querySelector(".clear")
clearNumberBtn.addEventListener("click", () => {
    displayResult.textContent = "";
    num1 = "";
    num2 = "";
    operator = "";
})
