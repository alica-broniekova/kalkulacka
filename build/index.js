"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_sync_1 = require("readline-sync");
function main() {
    var firstStr = (0, readline_sync_1.question)("Enter first number:\n"); /** otázka so stringom */
    var operator = (0, readline_sync_1.question)("Enter operator:\n"); /** otázka so stringom */
    var secondStr = (0, readline_sync_1.question)("Enter second number:\n"); /** otázka so stringom */
    var validInput = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);
    if (validInput) /** ak splna podmienky  */ {
        var firstNum = parseInt(firstStr);
        var secondNum = parseInt(secondStr);
        var result = calculate(firstNum, operator, secondNum); /** result = funkcia calculate */
        console.log(result); /** vypisanie vysledku funkcie calculate */
    }
    else {
        console.log('\ninvalid input\n'); /** ak neplatia podmienky vypise invalid input */
        main(); /** spustenie funkcie */
    }
}
function calculate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return firstNum + secondNum; /** ak je operator + vykoná prvé číslo + druhé číslo */
        case '-':
            return firstNum - secondNum; /** ak je operator - vykoná prvé číslo - druhé číslo */
        case '*':
            return firstNum * secondNum; /** ak je operator * vykoná prvé číslo * druhé číslo */
        case '/':
            return firstNum / secondNum; /** ak je operator / vykoná prvé číslo / druhé číslo */
    }
}
function isNumber(string) {
    var maybeNum = parseInt(string); /** bud to bude číslo alebo nie */
    var isNum = !isNaN(maybeNum); /** !isNaN(maybeNum)- maybeNum je číslo takže Nan je false a ! to premení na true */
    return isNum;
}
function isOperator(operator) {
    switch (operator) {
        case '+':
        case '-':
        case '*':
        case '/': /** ak je operator +,-,*,/ tak je to true */
            return true;
        default:
            return false; /** ak je operator nieco ine- false */
    }
}
main(); /** zavoláme funkciu main */
