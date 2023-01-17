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
        // remove .is-depressed class from all keys when a number key is pressed 
        Array.from(key.parentNode.children)
        .forEach(k => k.classList.remove('is-depressed'))
        }
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
            console.log('operator key')
            key.classList.add('is-depressed')
            // apply the previous key type operator
            calculator.dataset.previousKeyType = 'operator';
            calculator.dataset.firstNumber = displayedNum;
            calculator.dataset.operator = action;
        }
        if(action === 'decimal'){
            console.log('decimal key')
        }
        if(action === 'calculate'){
            console.log('equal key')
        }

        if(!action) {
            // remove the previous numbers to make way for the new ones if selecting an operator
            if(displayedNum === '0' || previousKeyType === 'operator') {
                screen.textContent = keyContent;
            }
            else{
                screen.textContent = displayedNum + keyContent;
            }
        }
        if(action === 'decimal') {
            screen.textContent = displayedNum + '.'
        }
        if(action === 'clear'){
            screen.textContent = '0'
        }
        if(action === 'calculate') {
            const firstNumber = calculator.dataset.firstNumber
            const operator = calculator.dataset.operator;
            const secondNumber = displayedNum;

            screen.textContent = calculate(firstNumber, operator , secondNumber);
        }

    }
})

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