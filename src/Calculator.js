
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
let displayNumber2 = "";
let displayNumber1 = "";
let result = null;

console.log(scientificButton)


scientificButton.forEach( scientificSymbol =>{
    scientificSymbol.addEventListener("click", ()=>{
        ScientificOperation(scientificSymbol.innerHTML)
    })
})

const ScientificOperation = (scientificOperator) => {
    const previousNumber = parseFloat(result);
    switch(scientificOperator){
        case "sin":
            result = Math.sin(previousNumber);
            break;
        case "cos":
            result = Math.cos(previousNumber);
            break;
        case "tan":
            result = Math.tan(previousNumber);
            break;
        case "Abs":
            result = Math.sin(previousNumber);
            break;
        default:
            break;
    }
}

numberButtons.forEach(numberSymbols =>{
    numberSymbols.addEventListener("click", ()=>{
        if(numberSymbols.innerHTML === "." && !isComma){
            isComma = true;
        }else if(numberSymbols.innerHTML === "." && isComma){
            return;
        }
        displayNumber2 += numberSymbols.innerHTML;
        textField.innerHTML = displayNumber2;
    })
})

const BasicCalc = () =>{
    const previousNumber = parseFloat(result);
    const currentNumber = parseFloat(displayNumber2);

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
            resultValue = previousNumber / currentNumber;
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
        if(displayNumber1 && operation && displayNumber2){
            BasicCalc();
        }else{
            result = parseFloat(displayNumber2);
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

const operations = (name = "") =>{
    displayNumber1 += displayNumber2 + " " + name + " ";
    textField.innerHTML = displayNumber1;
    console.log(displayNumber1);
    answerField.innerHTML = "";
    displayNumber2 ="";
    temporaryAnswerField.innerHTML = result;
}

equalButton.addEventListener("click", ()=>{
    if (!displayNumber2 || !displayNumber1) return;
    isComma = false;
    BasicCalc();
    operations();
    answerField.innerHTML = result;
    temporaryAnswerField.innerHTML = "";
    displayNumber2 = result;
    displayNumber1 = "";
})

removeLastValueButton.addEventListener("click", ()=>{
    textField.innerText = "";
    displayNumber2 = "";
})

// removeLastValueButton.addEventListener("click", ()=>{
//     answerField.innerHTML = "";
//     inputDisplay = "";
// })


// for(let button=0; button<numericButtonSymbols.length; button++){
//     const NormalbuttonElement = document.createElement("button");
//     NormalbuttonElement.innerHTML = numericButtonSymbols[button];
//     NormalbuttonElement.classList.add("calculator-styled-buttons");
//     NormalbuttonElement.addEventListener("click",()=>{
//         textField.innerHTML += numericButtonSymbols[button];
//     })
//     numericButtonSection.appendChild(NormalbuttonElement);
// }

// for(let button=0; button<scientificSymbols.length; button++){
//     const scientificButtonElement = document.createElement("button");
//     scientificButtonElement.innerHTML = scientificSymbols[button];
//     scientificButtonElement.classList.add("calculator-styled-buttons");
//     scientificButtonElement.addEventListener("click", ()=>{
//         if(scientificSymbols[button] === "("){
//             textField.innerHTML += scientificSymbols[button];
//         }else if(scientificSymbols[button] === ")"){
//             textField.innerHTML += scientificSymbols[button];
//         }else if(scientificSymbols[button] === "%"){
//             percentageEvaluation();
//         }else if(scientificSymbols[button] === "e"){
//            exponentialNumber();
//         }else if(scientificSymbols[button] === "sin"){
//             sinEvaluation();
//         }else if(scientificSymbols[button] === "cos"){
//             cosEvaluation()
//         }else if(scientificSymbols[button] === "Log"){
//             logEvaluation();
//         }else if(scientificSymbols[button] === "n!"){
//             factorialEvaluation(answerSection.innerHTML)
//         }else if(scientificSymbols[button] === "Abs"){
//             absoluteValue();
//         }else if(scientificSymbols[button] === "x<sup>2</sup>"){
//             squareNumberEvaluation();
//         }else if(scientificSymbols[button] === "x<sup>3</sup>"){
//             cubeNumberEvaluation();
//         }else if(scientificSymbols[button] === "tan"){
//             tanEvaluation();
//         }else if(scientificSymbols[button] === "x<sup>y</sup>"){
//             textField.innerHTML += "**";
//         }else if(scientificSymbols[button] === "rad"){
//             scientificButtonElement.classList.add("toggle-radians-degrees");
//         }
//     })
//     scientificButtonSection.appendChild(scientificButtonElement);
// }

// for(let button=0; button<operationsButtonSymbols.length; button++){
//     const operationButtonElement = document.createElement("button");
//     operationButtonElement.innerHTML = operationsButtonSymbols[button];
//     operationButtonElement.classList.add("calculator-styled-buttons")
//     operationButtonElement.addEventListener("click",()=>{
//         if(operationsButtonSymbols[button] === "DEL"){
//             backSpace();
//         }else if(operationsButtonSymbols[button] === "x"){
//             operationsButtonSymbols[button] = "*";
//         }else if(operationsButtonSymbols[button] === "="){
//             equals();
            
//         }else if(operationsButtonSymbols[button] === "ANS"){
//             answerMemory();
//         }else if(operationsButtonSymbols[button] === "AC"){
//             resetMemory();
//         }else{
//             textField.innerHTML += operationsButtonSymbols[button];
//         }
//     })
//     operationsButtonSection.appendChild(operationButtonElement);
// }

// const backSpace = () =>{
//     textField.innerHTML = textField.innerHTML.substring(0, textField.innerHTML.length - 1);
// }

// let evaluateAnswer = textField.innerHTML;
// const equals = () => {
//     answerSection.innerHTML += "";
//     answerSection.innerHTML = evaluate(textField.innerHTML);                         
// }

// const logEvaluation = () =>{
//     answerSection.innerHTML = Math.log(answerSection.innerHTML);
// }
// const factorialEvaluation = () =>{
//     console.log("factorial Evaluation!1")
//     if (answerSection.innerHTML < 0){
//         answerSection.innerHTML = -1
//         return answerSection.innerHTML;
//     }
//     else if (answerSection.innerHTML == 0){
//         answerSection.innerHTML= 1
//         return answerSection.innerHTML;
//     }
//     else {
//         answerSection.innerHTML = (answerSection.innerHTML * factorialEvaluation(answerSection.innerHTML - 1))
//         return answerSection.innerHTML;
//     }
// }
// const percentageEvaluation = () => {
//     answerSection.innerHTML = answerSection.innerHTML * 1/100;
// }

// const exponentialNumber = () => {
//     answerSection.innerHTML = EULER_NUMBER;
// }

// const absoluteValue = () => {
//     answerSection.innerHTML = Math.abs(evaluateAnswer);
// }
// const tanEvaluation = () => {
//     console.log(evaluateAnswer)
//     answerSection.innerHTML = Math.tan(evaluateAnswer);
// }
// const sinEvaluation = () =>{
//     answerSection.innerHTML = Math.sin(answerSection.innerHTML);
// }
// const squareNumberEvaluation = () =>{
//     answerSection.innerHTML = Math.pow(answerSection.innerHTML,2);
// }

// const cubeNumberEvaluation = () => {
//     answerSection.innerHTML = Math.pow(answerSection.innerHTML,3);
// }
// const cosEvaluation = () => {
//     answerSection.innerHTML = Math.cos(answerSection.innerHTML);
// }
// const resetMemory = () => {
//     textField.innerHTML = "";
//     answerSection.innerHTML = "";
// }
// const answerMemory = () =>{
//     let answerMemory = answerSection.innerHTML;
//     textField.innerHTML = answerMemory;
// }
// console.log(Math.tan(Math.PI) * Math.PI/180);