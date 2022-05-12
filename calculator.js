function operate(operator, x, y){
    if(operator == add){
        console.log('what two numbers would you like to add')
        add()};
    if(operator == subtract){
        console.log('what two numbers would you like to subtract')
        subtract()};
    if(operator == multiply){
        console.log('what two numbers would you like to multiply')
        return multiply()};
    if(operator == divide){
        console.log('what two numbers would you like to divide by')
        return divide()};
}  

add = (x, y) => x + y;

subtract = (x , y) => x - y;

multiply = (x, y) => x * y;
// NOTE: need to have the division rounded to the nearest whole number.
divide = (x, y) => x / y;


