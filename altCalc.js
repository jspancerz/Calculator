//dom objects to manipulate
const display = document.querySelector( '.calculator-display' );
const equalsBtn = document.querySelector( '.equals' );
const allClearBtn = document.querySelector( '.clear' );
const numberBtns = document.querySelectorAll( '.number' );
const operatorBtns = document.querySelectorAll( '.operator' );
const addBtn = document.querySelector( '.add' );
const subtractBtn = document.querySelector( '.subtract' );
const divideBtn = document.querySelector( '.divide' );
const multiplyBtn = document.querySelector( '.multiply' );

//storage to perform calculations on.
let firstOperand = null;
let mathOperator = null;
let secondOperand = null;

//creates clickable buttons for all the number keys, updates the display, assigns values to first/second operand.
numberBtns.forEach( ( number ) => {
    number.addEventListener( "click", () => {
        display.textContent += number.innerText
        if ( mathOperator === null ) {
            firstOperand = parseInt( display.innerText )
        } else if ( mathOperator === '' ) {
            secondOperand = firstOperand

        }
    } )
} );

//creates clickable buttons for all the operator keys, updates display, and assigns value to math operator.
operatorBtns.forEach( ( operator ) => {
    operator.addEventListener( "click", () => {
        display.textContent = operator.innerText
        mathOperator = operator.innerText
    } )
} );


//equals calls the appropriate function attached to the string inside mathOperator, then sets firstOperand to the result and updates the display. 
equalsBtn.addEventListener( 'click', () => {
    if ( mathOperator === null ) {
        display.innerText = 'need operator'
    } else if ( mathOperator === '+' ) {
        display.innerText = add( firstOperand, secondOperand )
        firstOperand = parseInt( display.innerText )
    } else if ( mathOperator === '-' ) {
        display.innerText = subtract( firstOperand, secondOperand )
        firstOperand = parseInt( display.innerText )
    } else if ( mathOperator === '*' ) {
        display.innerText = multiply( firstOperand, secondOperand )
        firstOperand = parseInt( display.innerText )
    } else if ( mathOperator === '/' ) {
        display.innerText = divide( firstOperand, secondOperand )
        firstOperand = parseInt( display.innerText )
    }
} );

//clears all memory of previous inputs
allClearBtn.addEventListener( 'click', () => {
    display.innerText = null;
    firstOperand = null;
    mathOperator = null;
    secondOperand = null;
} )

//math functions
function add( x, y ) {
    return result = x + y
};
function subtract( x, y ) {
    return result = x - y
};
function multiply( x, y ) {
    return result = x * y
};
function divide( x, y ) {
    return result = x / y
};










