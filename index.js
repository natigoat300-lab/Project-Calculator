//add number
function add(a, b) {
    return a + b;
}
// substract number
function subtract(a, b) {
    return a - b;
}
// multiplay number
function multiple(a, b) {
    return a * b;
}
// devide number 
function divide(a, b) {
    return a / b;
}

//
const num1 = 1
const operator = "/";
const num2 = 3;
// function that takes operator and two numbers
function operate() {
    if (operator == "+") {
        console.log(add(num1, num2))
    }else if (operator == "-") {
        console.log(subtract(num1, num2))
    }else if (operator == "*") {
        console.log(multiple(num1, num2))
    }else if (operator == "/") {
        console.log(divide(num1, num2))
    }
}

operate()