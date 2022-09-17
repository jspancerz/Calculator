const display = document.querySelector( '.calculator-display' );
const equalsBtn = document.querySelector( '.equals' );
const allClearBtn = document.querySelector( '.clear' );
const numberBtns = document.querySelectorAll( '.number' );
const operatorBtns = document.querySelectorAll( '.operator' );
const addBtn = document.querySelector( '.add' );
const subtractBtn = document.querySelector( '.subtract' );
const divideBtn = document.querySelector( '.divide' );
const multiplyBtn = document.querySelector( '.multiply' );

let currentValue = '';
let mathOperator = '';
let previousValue = '';

numberBtns.forEach( ( number ) => {
    number.addEventListener( 'click', function ( e ) {
        setNumber( e.target.textContent )
        display.textContent = currentValue;
    } )
} )

function setNumber( num ) {
    if ( currentValue.length <= 5 ) {
        currentValue += num
        console.log( `this is the currentValue: ${ currentValue }` )
    }
};

operatorBtns.forEach( ( operator ) => {
    operator.addEventListener( 'click', function ( e ) {
        setOperator( e.target.textContent )
        display.textContent = operator.textContent
    } )
} )

function setOperator( op ) {
    mathOperator = op
    previousValue = currentValue;
    console.log( `this is the previousValue: ${ previousValue }` )
    currentValue = '';
    console.log( `this is the currentValue: ${ currentValue }` )
};

equalsBtn.addEventListener( 'click', function () {
    if ( mathOperator !== '' ) {
        calculate()
        display.textContent = currentValue
    }
} )

function calculate() {
    previousValue = Number( previousValue );
    currentValue = Number( currentValue );

    if ( mathOperator === '+' ) {
        currentValue = add( previousValue, currentValue )
    } else if ( mathOperator === '-' ) {
        currentValue = subtract( previousValue, currentValue )
    } else if ( mathOperator === '*' ) {
        currentValue = multiply( previousValue, currentValue )
    } else if ( mathOperator === '/' ) {
        currentValue = divide( previousValue, currentValue )
    }
};

allClearBtn.addEventListener( 'click', () => {
    display.textContent = '';
    currentValue = '';
    mathOperator = '';
    previousValue = '';
} )

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