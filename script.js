//store relevant html elements in JS variables
const numButtons = document.querySelectorAll('.numBut')
const opButtons = document.querySelectorAll('.opBut')
const display = document.querySelector('#screen')
const clearBtn = document.getElementById('clear')
const delBtn = document.getElementById('delete')
const equalBtn = document.getElementById('equals')
let decimalPressed = false
let eqBtnClicked = false;
let solution = 0

//add event listener for equals button
equalBtn.addEventListener('click', calculate)

//clear the display or delete one digit from the end of the displayed number
clearBtn.addEventListener('click', () => {
    display.textContent = 0;
    op.first = 0;
    op.second = 0;
    op.erator = "";
    solution = 0;
    calculationDone = false;
    decimalPressed = false;
    eqBtnClicked = false
})
delBtn.addEventListener('click', deleteDigit)

//object containing main calculation functions
const calc = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b, 
    percent: (a,b) => (a / 100) * b,
}

//object containing operator and values to be operated
const op = {
    first: 0,
    second: 0,
    erator: "",
    calculationDone: false,
}

//function that calls the calculator functions depending on the operator
function operate(a, b, c) {
     switch (c) {
        case "+":
            solution = calc.add(a,b);
            break;
        case "-":
            solution = calc.subtract(a,b);
            break;
        case "x":
            solution = calc.multiply(a,b);
            break;
        case "/":
            solution = calc.divide(a,b);
            break;
        case "%":
            solution = calc.percent(a,b);
            break;
    }
}

//loop that adds an event listener for the numButtons to call populate()
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener("click", () => {
        if (numButtons[i].value === '.' && decimalPressed === false) {
            decimalPressed = true;
            populate(numButtons[i].value)
        } else if (numButtons[i].value === '.' && decimalPressed === true) {
            return;
        } else {
            populate(numButtons[i].value)
        }
    })
}

for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', () => {
        getNext(opButtons[i].value)  
    })
}

//populates the display
function populate(a) {
    if (display.textContent === "0") {
        if (a === '.') {
            display.textContent += a;
        } else {
            display.textContent = a
        }
    } else {
        if (display.textContent.length < 10) {
            display.textContent += a;
        }
        
    }
    
}

function deleteDigit() {
    if (display.textContent.length > 1) {
        display.textContent = display.textContent.slice(0, -1);
    } else {
        display.textContent = "0"
    }
}

function calculate() {
    op.second = Number(display.textContent);
    if (op.erator === '') {
        display.textContent = op.second;
        eqBtnClicked = false;
    } else {
        operate(op.first, op.second, op.erator);
        if (op.second === 0 && op.erator === "/") {
            display.textContent = ">:|";
            display.value = 0
        } else {
            //convert solution to scientific notation if longer that 10 digits
            if (solution.toString().length > 10) {
                solution = solution.toExponential(2);
            }
            display.textContent = solution;
        }
    } 
    op.calculationDone = true;
}

function getNext(x) {
    op.erator = x;
    op.first = Number(display.textContent);
    if (op.calculationDone) {
        op.calculationDone = false;
    } else {
        display.textContent = "0";  
    }
    decimalPressed = false;
}