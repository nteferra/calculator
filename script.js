//basic calculator functions
const add = (a, b) => (a + b);
const subtract = (a, b) => (a - b);
const multiply = (a, b) => (a * b);
const divide = (a, b) => (a / b);

//calculator variables
let x = 0;
let y = '';
let z = 0;


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