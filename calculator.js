let screen = document.querySelector('.screen');

const calculator = document.querySelector('.calculator')

const keys = calculator.querySelector('.calculator_keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;

        if(!action) {
            console.log('number key')
        }
        if(action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide'){
            console.log('operator key')
        }
    }
})

function One(){
    screen.innerHTML = 1;
}

function Two(){
    screen.innerHTML = 2;
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