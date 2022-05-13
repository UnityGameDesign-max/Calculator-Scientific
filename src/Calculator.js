let isComma = false;
const scientificButton = document.querySelectorAll(".scientific-symbol");
const numberButtons = document.querySelectorAll(".number");
const clearAllButton = document.querySelector(".clear-all");
const equalButton = document.querySelector(".equal");
const operationButton = document.querySelectorAll(".operation");
const textField = document.getElementById("calculator__top-field");
const answerField = document.getElementById("calculator__top-answer");
const temporaryAnswerField = document.getElementById("calculator__top-temp-answer");
const removeLastValueButton = document.querySelector(".delete-last-value");

let operation ="";
let answerDisplay = "";
let inputDisplay = "";
let returnValue = "";
let result = null;


scientificButton.forEach( scientificSymbol =>{
    scientificSymbol.addEventListener("click", ()=>{
        ScientificOperation(scientificSymbol.innerHTML);
    })
})

numberButtons.forEach(numberSymbols =>{
    numberSymbols.addEventListener("click", ()=>{
        if(numberSymbols.innerHTML === "." && !isComma){
            isComma = true;
        }else if(numberSymbols.innerHTML === "." && isComma){
            return;
        }
        answerDisplay += numberSymbols.innerHTML;
        textField.innerHTML = answerDisplay;
    })
})

const BasicCalculation = () =>{
    const previousNumber = parseFloat(result);
    const currentNumber = parseFloat(answerDisplay);

    switch(operation){
        case "+":
            result = previousNumber + currentNumber;
            break;
        case "-":
            result = previousNumber - currentNumber;
            break;
        case "x":
            result = previousNumber * currentNumber;
            break;
        case "/":
            result = previousNumber / currentNumber;
            break;
        default:
            break;
    }
}

operationButton.forEach( operationSymbol =>{
    operationSymbol.addEventListener("click", ()=>{
        if(!textField.innerHTML) return;
        isComma = false;
        const operationName = operationSymbol.innerHTML;
        if(inputDisplay && operation && answerDisplay){
            BasicCalculation();
        }else{
            result = parseFloat(answerDisplay);
        }
        operations(operationName)
        operation = operationName;
        console.log(result);
    })
})

clearAllButton.addEventListener("click", ()=>{
    inputDisplay = "";
    answerDisplay = "";
    result = "";
    textField.innerHTML = "";
    answerField.innerHTML = "";
})

const operations = (name =" " ) =>{
    inputDisplay += answerDisplay + " " + name + " ";
    textField.innerHTML = inputDisplay;
    answerField.innerHTML = "";
    answerDisplay ="";
    temporaryAnswerField.innerHTML = result;
}

equalButton.addEventListener("click", ()=>{
    if (!answerDisplay || !inputDisplay) return;
    isComma = false;
    BasicCalculation();
    operations();
    answerField.innerHTML = result;
    temporaryAnswerField.innerHTML = "";
    answerDisplay = result;
    inputDisplay = "";
})

const ScientificOperation = (scientificOperator) => {
    switch(scientificOperator){
        case "sin":
            result = Math.sin(answerDisplay);
            break;
        case "cos":
            result = Math.cos(answerDisplay);
            break;
        case "tan":
            result = Math.tan(answerDisplay);
            break;
        case "Abs":
            result = Math.sin(answerDisplay);
            break;
        default:
            break;
    }
}

removeLastValueButton.addEventListener("click", ()=>{
    textField.innerText = "";
    answerDisplay = "";
})