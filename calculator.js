const numerals = document.querySelectorAll('.digit');
const clearField = document.querySelector('#clear');
const gui = document.querySelector('#display');
const symbols = document.querySelectorAll('.operator');


clearField.addEventListener("click", function(e){
    gui.textContent = '';
});

numerals.forEach((numeral) => {
    numeral.addEventListener("click", () => {
        gui.textContent = numeral.innerText
    });
});


symbols.forEach((symbol) => {
    symbol.addEventListener("click", () => {
        gui.textContent = symbol.innerText
    });
});

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

let displayMessage = gui

add = (x, y) =>  x + y;

subtract = (x, y) => x - y;

multiply = (x, y) => x * y;

divide = (x, y) => x / y;