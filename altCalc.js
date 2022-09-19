const display = document.querySelector( '.calculator-display' );
const equalsBtn = document.querySelector( '.equals' );
const allClearBtn = document.querySelector( '.clear' );
const numberBtns = document.querySelectorAll( '.number' );
const operatorBtns = document.querySelectorAll( '.operator' );
const addBtn = document.querySelector( '.add' );
const subtractBtn = document.querySelector( '.subtract' );
const divideBtn = document.querySelector( '.divide' );
const multiplyBtn = document.querySelector( '.multiply' );
const decimalBtn = document.querySelector( '.decimal' );

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
    if ( previousValue && currentValue != '' ) {
        calculate()
        // if ( currentValue.length <= 6 ) {
        display.textContent = currentValue
        // } else {
        //     display.textContent = currentValue.slice( 0, 6 ) + '...';
        // }
        mathOperator = ''
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

function addDecimal() {
    if (!currentValue.includes( '.' )) {
        currentValue += '.';
    }
};

decimalBtn.addEventListener( "click", function () {
    addDecimal()
} );

allClearBtn.addEventListener( 'click', () => {
    display.textContent = '0';
    currentValue = '';
    mathOperator = '';
    previousValue = '';
    console.clear()
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