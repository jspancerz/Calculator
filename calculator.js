//created dom objects to manipulate
const display = document.querySelector( '.calculator-display' );
const equalsBtn = document.querySelector( '.equals' );
const allClearBtn = document.querySelector( '.allClear' );
const numberBtns = document.querySelectorAll( '.number' );
const operatorBtns = document.querySelectorAll( '.operator' );
const addBtn = document.querySelector( '.add operator' );
const subtractBtn = document.querySelector( '.subtract operator' );
const divideBtn = document.querySelector( '.divide operator' );
const multiplyBtn = document.querySelector( '.multiply operator' );

addBtn.addEventListener( 'click', operate.add )
subtractBtn.addEventListener( 'click', operate.subtract)
divideBtn.addEventListener( 'click', operate.divide )
multiplyBtn.addEventListener( 'click', operate.multiply )
equalsBtn.addEventListener()

const equalsBtn

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


//creates clickable buttons for all the number keys, and creates
numberBtns.forEach( ( btn ) => {
    btn.addEventListener( "click", () => {
        display.innerText += btn.innerText
        if ( calculator.mathOperator === null ) {
            calculator.firstOperand = display.innerText
            console.log( calculator.firstOperand )
        }
    } )
} );

//creates clickable buttons for all the operator keys.
operatorBtns.forEach( ( btn ) => {
    btn.addEventListener( "click", () => {
        display.textContent = btn.innerText
        calculator.mathOperator = btn.innerText
    } )
} );


//this is a WORK IN PROGRESS, will clear the calculator object effectively resetting the entire calculator.
// function allClear() {
//     forEach( key in calculator obj ){
//         set property value to null/0
//     }
// }


//create a function to populate the calculators display whn a button is clicked 
// function updateDisplay( click ) {
//     if ( click === operatorBtns ) {
//         operatorBtns.forEach( ( btn ) => {
//             btn.addEventListener( "click", () => {
//                 display.textContent = btn.innerText
//                 calculator.mathOperator = btn.innerText
//             } )
//         } )
//     } else if {

//assigns DOM Object to proper corresponding function inside the 'operate' object.
