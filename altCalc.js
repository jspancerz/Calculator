//created dom objects to manipulate
const display = document.querySelector( '.calculator-display' );
const equalsBtn = document.querySelector( '.equals' );
const allClearBtn = document.querySelector( '.clear' );
const numberBtns = document.querySelectorAll( '.number' );
const operatorBtns = document.querySelectorAll( '.operator' );
const addBtn = document.querySelector( '.add' );
const subtractBtn = document.querySelector( '.subtract' );
const divideBtn = document.querySelector( '.divide' );
const multiplyBtn = document.querySelector( '.multiply' );

//data storage to perform calculations on.
let firstOperand = null;
let mathOperator = null;
let secondOperand = null;


//creates clickable buttons for all the number keys
numberBtns.forEach( ( btn ) => {
    btn.addEventListener( "click", () => {
        display.textContent += btn.innerText
        if ( mathOperator === null ) {
            firstOperand = parseInt( display.innerText )
        } if ( mathOperator !== null ) {
            display.textContent = null
            display.textContent += btn.innerText;
            secondOperand = parseInt( display.innerText )
        }
    } )
} );

//creates clickable buttons for all the operator keys.
operatorBtns.forEach( ( btn ) => {
    btn.addEventListener( "click", () => {
        display.textContent = btn.innerText
        mathOperator = btn.innerText
    } )
} );

//the mathematical functions
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

//equals calls the appropriate function attached to the string inside mathOperator, then sets firstOperand to the result. 
equalsBtn.addEventListener( 'click', () => {
    if ( mathOperator === null ) {
        display.innerText = 'need operator'
    } else if ( mathOperator === 'add' ) {
        display.innerText = add( firstOperand, secondOperand )
        firstOperand = parseInt(display.innerText)
    } else if ( mathOperator === 'subtract' ) {
        display.innerText = subtract( firstOperand, secondOperand )
        firstOperand = parseInt(display.innerText)
    } else if ( mathOperator === 'multiply' ) {
        display.innerText = multiply( firstOperand, secondOperand )
        firstOperand = parseInt(display.innerText)
    } else if ( mathOperator === 'divide' ) {
        display.innerText = divide( firstOperand, secondOperand )
        firstOperand = parseInt(display.innerText)
    } 
} );

//adding functionality to operator buttons
allClearBtn.addEventListener( 'click', () => {
    display.innerText = null;
    firstOperand = null;
    mathOperator = null;
    secondOperand = null;
    console.log( 'all variables clear and display reset!' )
} )
addBtn.addEventListener( 'click', () => {
    mathOperator = 'add'
    console.log( 'variable changed to add.' )
} )
subtractBtn.addEventListener( 'click', () => {
    mathOperator = 'subtract'
    console.log( 'variable changed to subtract' )
} )
divideBtn.addEventListener( 'click', () => {
    mathOperator = 'divide'
    console.log( 'variable changed to divide' )
} )
multiplyBtn.addEventListener( 'click', () => {
    mathOperator = 'multiply'
    console.log( 'variable changed to multiply' )
} )



//equals button, will check what operation the variable mathOperator is set to and perform the proper function as a result, sets new result to firstOperand.
// function equals( mathOperator ) {
//     if ( mathOperator === '' ) {
//         display.innerText = 'you must choose a operator!'
//     } else if ( mathOperator === addition ) {
//         add( firstOperand, secondOperand )
//     } else if ( mathOperator === subtraction ) {
//         subtract( firstOperand, secondOperand )
//     } else if ( mathOperator === multiplication ) {
//         multiply( firstOperand, secondOperand )
//     } else if ( mathOperator === division ) {
//         divide( firstOperand, secondOperand )
//     }
//     firstOperand = display.textContent
// };








