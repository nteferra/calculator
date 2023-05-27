const calc = {
    add: (a,b) => a + b,
    subtract: (a,b) => a - b,
    multiply: (a,b) => a * b,
    divide: (a,b) => a / b, 
}

const op = {
    first: 0,
    second: 0,
    erator: "",
}

function operate(a, b, c) {
    switch (c) {
        case "+":
            return calc.add(a,b);
        case "-":
            return calc.subtract(a,b);
        case "x":
            return calc.multiply(a,b)
        case "/":
            return calc.divide(a,b);
    }
}