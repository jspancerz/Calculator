//created dom objects to manipulate
const display = document.querySelector( '.calculator-display' );
const equalsBtn = document.querySelector( '.equals' );
const allClearBtn = document.querySelector( '.allClear' );
const numberBtns = document.querySelectorAll( '.number' );
const operatorBtns = document.querySelectorAll( '.operator' );


//data storage to perform a calculation.
const calculator = {
    firstOperand: null,
    secondOperand: null,
    mathOperator: null,
};

//the mathematical operations, called when a user clicks a corresponding button and 'equals'
const operate = {
    add: ( operand1, operand2 ) => operand1 + operand2,
    subtract: ( operand1, operand2 ) => operand1 - operand2,
    multiply: ( operand1, operand2 ) => operand1 * operand2,
    divide: ( operand1, operand2 ) => operand1 / operand2,
};


//creates clickable buttons for all the number keys.
numberBtns.forEach( ( btn ) => {
    btn.addEventListener( "click", () => {
        display.innerText = btn.innerText
        if ( calculator.firstOperand === null ) {
            calculator.firstOperand = parseInt(display.textContent)
        } else {
            calculator.firstOperand += parseInt(btn.innerText) 
        }
    } )
} );


operatorBtns.forEach( ( btn ) => {
    btn.addEventListener( "click", () => {
        display.textContent = btn.innerText
    } )
} )

//create a function to populate the calculators display whn a button is clicked 
function updateDisplay() {

}