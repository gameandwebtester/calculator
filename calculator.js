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

            if(firstNumber && operator && previousKeyType !== 'operator' && 
            previousKeyType !== 'calculate'){
                const calcValue = calculate(firstNumber, operator, secondNumber);
                screen.textContent = calcValue;
                calculator.dataset.firstNumber = displayedNum;

                // update the calculate value as the firstnumber
                calculator.dataset.firstNumber = calcValue
            }       
            else{
                calculator.dataset.firstNumber = displayedNum
            }

            key.classList.add('is-depressed')
            // apply the previous key type operator
            calculator.dataset.previousKeyType = 'operator';
            //calculator.dataset.firstNumber = displayedNum;
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
            calculator.dataset.previousKeyType = 'number';
        }
        if(action === 'decimal') {
            if(!displayedNum.includes('.')){
                screen.textContent = displayedNum + '.'
            }
            else if (previousKeyType === 'operator' || previousKeyType === 'calculate'){
                screen.textContent = '0';
            }
            calculator.dataset.previousKeyType = 'decimal'
        }
        if(action === 'clear'){
            screen.textContent = '0'
            calculator.dataset.previousKeyType = 'clear'
            calculator.dataset.firstNumber = '';
            calculator.dataset.modValue = '';
            calculator.dataset.operator = '';
        }
        if(action === 'calculate') {
            let firstNumber = calculator.dataset.firstNumber
            const operator = calculator.dataset.operator;
            const secondNumber = displayedNum;

            if(firstNumber) {
                if (previousKeyType === 'calculate'){
                    firstNumber = displayedNum;
                    secondNumber = calculator.dataset.modValue;
                }
                screen.textContent = calculate(firstNumber, operator , secondNumber);
            }
            calculator.dataset.modValue = secondNumber;
            calculator.dataset.previousKeyType = 'calculate'
        }
    }
})

// after typing the second number the result should be calculated but not shown

function calculate(num1, operator, num2) {
    let result = ''
    // the input of the calculator will be a string so you need to convert it into a float using parseFloat

    switch(true){
        case operator === 'add': result = parseFloat(num1) + parseFloat(num2);
        break;
        case operator === 'subtract': result = parseFloat(num1) - parseFloat(num2);
        break
        case operator === 'multiply': result = parseFloat(num1) * parseFloat(num2);
        break
        case operator === 'divide': result = parseFloat(num1) / parseFloat(num2);
        break
    }
    return result;
    /*
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
    }*/
}
