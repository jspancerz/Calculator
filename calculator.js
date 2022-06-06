function operate(operator, x, y){
    if(operator === 'add'){
       return add(x, y);
    }
    if(operator === 'subtract'){
      return subtract(x, y);
    }
    if(operator === 'multiply'){
        return multiply(x, y);
    }
    if(operator === 'divide'){
        return divide(x, y);
    }
    if(operator === 'divide' && x || y === 0){
        return console.log('you cant divide by zero!')
    }
}

let displayValue = {}

add = (x, y) =>  x + y;

subtract = (x, y) => x - y;

multiply = (x, y) => x * y;

divide = (x, y) => x / y;

function populateDisplay(){
    
}

const button = document.querySelectorAll(button);
const display = document.querySelectorAll(#display);