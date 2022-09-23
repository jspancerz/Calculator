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
const undoBtn = document.querySelector( '.undo' );


let currentValue = '';
let mathOperator = '';
let previousValue = '';
let shortenedValue = '';

numberBtns.forEach( ( number ) => {
    number.addEventListener( 'click', function ( e ) {
        setNumber( e.target.textContent )
        display.textContent = currentValue;
    } )
} )

function setNumber( num ) {
    if ( currentValue.length <= 6 ) {
        currentValue += num
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
    currentValue = '';
};

equalsBtn.addEventListener( 'click', function () {
    if ( previousValue && currentValue != '' ) {
        calculate()
        mathOperator = ''
        currentValue = currentValue.toString()
        if ( currentValue.length <= 6 ) {
            display.textContent = currentValue
        } else {
            shortenedValue = currentValue.slice( 0, 6 ) + '...';
            currentValue = shortenedValue
            display.textContent = currentValue
        }
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

    currentValue = roundNum( currentValue );
};

function addDecimal() {
    if ( !currentValue.includes( '.' ) ) {
        currentValue += '.';
    }
};

decimalBtn.addEventListener( "click", function () {
    addDecimal()
    display.textContent = currentValue
} );

allClearBtn.addEventListener( 'click', () => {
    display.textContent = '0';
    currentValue = '';
    mathOperator = '';
    previousValue = '';
    shortenedValue = '';
} )

undoBtn.addEventListener( 'click', function () {
    undo()
    display.textContent = currentValue
} )

function roundNum( num ) {
    return Math.round( num * 1000 ) / 1000;
}

function undo() {
    let newCurrentValue = currentValue.substring( 0, currentValue.length - 1 )
    currentValue = newCurrentValue
}

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
