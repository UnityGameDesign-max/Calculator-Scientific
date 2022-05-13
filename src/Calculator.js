
const scientificSymbols = [ "Abs", "Log", "sin", "cos", "tan", "rad" , "deg", "%", "x<sup>2</sup>","x<sup>3</sup>", "x<sup>y</sup>" ];


const BasicCalc = (value1, value2, operator) =>{
    const previousNumber = parseFloat(value1);
    const currentNumber = parseFloat(value2);
    let resultValue;

    if(isNaN(previousNumber) || isNaN(currentNumber)) return

    switch(operator){
        case "+":
            resultValue = previousNumber + currentNumber;
            break;
        case "-":
            resultValue = previousNumber - currentNumber;
            break;
        case "*":
            resultValue = previousNumber * currentNumber;
            break;
        case "/":
            resultValue = previousNumber / currentNumber;
            break;
        default:
            break;
    }
}
 
let textField = document.getElementById("calculator__top-field");
const numericButtonSection = document.getElementById("calculator__bottom-normal-button-numeric");
const operationsButtonSection = document.getElementById("calculator__bottom-normal-button-operations");
const answerSection = document.getElementById("calculator__top-answer");
const scientificButtonSection = document.getElementById("calculator___bottom-scientific-button");
const EULER_NUMBER = "2.71828182846";

let isComma = false;

// const buttonsScientific = document.querySelector(".calculator___bottom-scientific-button");
const scientificButton = document.querySelectorAll(".scientific-symbol");
const numberButtons = document.querySelectorAll(".number");
console.log(scientificButton)
let scientificDisplay;
let scientificOperation = "";

scientificButton.forEach( scientificSymbol =>{
    scientificSymbol.addEventListener("click", ()=>{
        textField.innerHTML = scientificOperation;
    })
})

numberButtons.forEach(numberSymbols =>{
    numberSymbols.addEventListener("click", ()=>{
        textField.innerHTML += numberSymbols.innerHTML;
    })
})

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