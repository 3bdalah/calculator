"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
function main() {
    var num1 = readline_sync_1.question("Enter the first number: \n");
    var operator = readline_sync_1.question("Enter operator : \n ");
    var num2 = readline_sync_1.question("Enter the second number  : \n");
    // validate inputs 
    var validInput = isNumber(num1) && isOperator(operator) && isNumber(num2);
    if (validInput) {
        console.log("Is valid");
        var number1 = parseInt(num1);
        var number2 = parseInt(num2);
        var result = calculater(number1, operator, number2);
        console.log(result);
    }
    else {
        console.log("Invalid input");
        main();
    }
}
// fucntion oeprator 
function isOperator(str) {
    switch (str) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}
// function to calcuater 
function calculater(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}
// Checked Iss Number 
function isNumber(str) {
    var maybeNum = parseInt(str);
    var isNum = !isNaN(maybeNum);
    return isNum;
}
main();
