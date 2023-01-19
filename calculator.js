let screen = document.querySelector('.screen');

screen.textContent = '0'

const calculator = document.querySelector('.calculator')

const keys = calculator.querySelector('.calculator_keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;

        const keyContent = key.textContent;
        const displayedNum = screen.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;

        if(!action) {
            console.log('number key')
            /* change the previous key type from operator to number otherwise 
            it will stay on operator and cause problems like the screen not being
            able to show more than one digit*/
            calculator.dataset.previousKeyType = 'number';
        // remove .is-depressed class from all keys when a number key is pressed 
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
        }
        if(action === 'add' || action === 'subtract' || action === 'multiply'
         || action === 'divide'){
            const firstNumber = calculator.dataset.firstNumber
            const operator = calculator.dataset.operator;
            const secondNumber = displayedNum;

            if(firstNumber && operator && previousKeyType !== 'operator'){
                screen.textContent = calculate(firstNumber, operator, secondNumber);
            }

            key.classList.add('is-depressed')
            // apply the previous key type operator
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstNumber = displayedNum;
            calculator.dataset.operator = action;
        }

        if(!action) {
            // remove the previous numbers to make way for the new ones if selecting an operator
            if(displayedNum === '0' || previousKeyType === 'operator') {
                screen.textContent =  keyContent;
            }
            else if(displayedNum > 9999){
                screen.textContent = displayedNum;
            }
            else{
                screen.textContent = displayedNum + keyContent;
            }
        }
        if(action === 'decimal') {
            if(!displayedNum.includes('.')){
                screen.textContent = displayedNum + '.'
            }
            else if (previousKeyType === 'operator'){
                screen.textContent = '0';
            }
            calculator.dataset.previousKeyType = 'decimal'
        }
        if(action === 'clear'){
            screen.textContent = '0'
            calculator.dataset.previousKeyType = 'clear'
        }
        if(action === 'calculate') {
            const firstNumber = calculator.dataset.firstNumber
            const operator = calculator.dataset.operator;
            const secondNumber = displayedNum;
            calculator.dataset.previousKeyType = 'calculate'

            screen.textContent = calculate(firstNumber, operator , secondNumber);

        }
    }
})

// after typing the second number the result should be calculated but not shown

function calculate(num1, operator, num2) {
    let result = ''
    // the input of the calculator will be a string so you need to convert it into a float using parseFloat
    if(operator === 'add'){
        result = parseFloat(num1) + parseFloat(num2);
    }
    else if(operator === 'subtract'){
        result = parseFloat(num1) - parseFloat(num2);
    }
    else if(operator === 'multiply'){
        result = parseFloat(num1) * parseFloat(num2);
    }
    else if (operator === 'divide') {
        result = parseFloat(num1) / parseFloat(num2);
    }
    return result;

}

function add(num1, num2){
    let sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    let sum = num1 - num2;
    return sum;
}

function multiply(num1, num2){
    let sum = num1 * num2;
    return sum;
}

function divide(num1, num2){
    let sum = num1 / num2;
    return sum;
}

function operate(a, b){
    a = 8;
    let operType = 'div' //prompt('type in the operator').toLowerCase();
    b = 8;

    let num1 = parseInt(a);
    let num2 = parseInt(b);

    let plus = add(num1, num2);
    let multi = multiply(num1, num2);
    let div = divide(num1, num2);

    if(operType === 'plus'){
        return (plus);
    }
    if(operType === 'multi'){
        return (multi);
    }
    if(operType === 'div'){
        return (div);
    }

}
 console.log(operate()); 