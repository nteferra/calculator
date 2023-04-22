//basic calculator functions
const add = (a, b) => (a + b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => (a / b);

//calculator variables
let fNum = 0
let sNum = 0
let oprtr = ''

function operate(x, y, z) {
    if (y === '+') {
        return add(x, z);
    } else if (y === '-') {
        return subtract(x, z);
    } else if (y === '*') {
        return multiply(x, z);
    } else if (y === '/') {
        return divide(x, z);
    } else {
        return 'ERROR'
    }
}