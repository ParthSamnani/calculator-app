const numbers = document.querySelectorAll(".number");
console.log(numbers);

numbers.forEach((number)=>{
    number.addEventListener("click", (event)=>{
        inputNumber(event.target.value)
        updateScreen(currentInput)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = (number) =>{
    calculatorScreen.value = number
}

let prevInput = '0'
let calculatorOperator = ''
let currentInput = '0'

const inputNumber = (number) =>{
    if (currentInput === '0'){
        currentInput = number
    }else{
    currentInput += number;
    }
}

const operators = document.querySelectorAll('.operator');

operators.forEach((operator)=>{
    operator.addEventListener("click", (event)=>{
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator)=>{
    prevInput = currentInput
    calculatorOperator = operator
    currentInput = '0'
}
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', ()=>{
    calculate()
    updateScreen(currentInput)
})

const calculate = () =>{
    let result = 0;
    switch(calculatorOperator){
        case '+':
            result = parseInt(prevInput) + parseInt(currentInput)
            break
        case '-':
            result = parseInt(prevInput) - parseInt(currentInput)
            break
        case '*':
            result = parseInt(prevInput)*parseInt(currentInput)
            break
        case '/':
            result = parseInt(prevInput)/parseInt(currentInput)
            break
        default:
            return 
    }
    currentInput = result.toString()
    calculatorOperator = ''
}
const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    console.log("AC button is pressed")
})

const clearAll = () => {
    prevInput = '0'
    calculatorOperator = ''
    currentInput = '0'
}

clearBtn.addEventListener("click",()=>{
    clearAll()
    updateScreen(currentInput)
})