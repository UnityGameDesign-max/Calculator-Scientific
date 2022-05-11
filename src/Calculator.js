const numericButtonSymbols = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
const operationsButtonSymbols = ["DEL", "AC", "x", "/", "+", "-", "ANS", "="];
const scientificSymbols = [
    "Abs", "Log", "sin", "cos", "tan", "(" , ")", 
    "ln", "%", "n!", "e", "x<sup>2</sup>",
    "x<sup>3</sup>", "x<sup>y</sup>", "π"
];
 
let textField = document.getElementById("calculator__top-field");
const numericButtonSection = document.getElementById("calculator__bottom-normal-button-numeric");
const operationsButtonSection = document.getElementById("calculator__bottom-normal-button-operations");
const answerSection = document.getElementById("calculator__top-answer");
const scientificButtonSection = document.getElementById("calculator___bottom-scientific-button");
const EULER_NUMBER = "2.71828182846";


for(let button=0; button<numericButtonSymbols.length; button++){
    const NormalbuttonElement = document.createElement("button");
    NormalbuttonElement.innerHTML = numericButtonSymbols[button];
    NormalbuttonElement.classList.add("calculator-styled-buttons");
    NormalbuttonElement.addEventListener("click",()=>{
        textField.innerHTML += numericButtonSymbols[button];
    })
    numericButtonSection.appendChild(NormalbuttonElement);
}

const percentageConversion = (percentageStr) => {
    let percentage = percentageStr.substring(0, percentageStr.length - 1);
    return percentage * 1/100;
}

for(let button=0; button<scientificSymbols.length; button++){
    const scientificButtonElement = document.createElement("button");
    scientificButtonElement.innerHTML = scientificSymbols[button];
    scientificButtonElement.classList.add("calculator-styled-buttons");
    scientificButtonElement.addEventListener("click", ()=>{
        if(scientificSymbols[button] === "("){
            textField.innerHTML += scientificSymbols[button];
        }else if(scientificSymbols[button] === "%"){
            textField.innerHTML += scientificSymbols[button];
        }else if(scientificSymbols[button] === "e"){
            textField.innerHTML += scientificSymbols[button];
            scientificButtonElement.setAttribute()
        }else if(scientificSymbols[button] === "sin"){
            sin();
        }else if(scientificSymbols[button] === "cos"){
            textField.innerHTML += scientificSymbols[button] + "("
        }else if(scientificSymbols[button] === "Log"){
            textField.innerHTML += scientificSymbols[button] + "(";
        }
    })
    scientificButtonSection.appendChild(scientificButtonElement);
}

for(let button=0; button<operationsButtonSymbols.length; button++){
    const operationButtonElement = document.createElement("button");
    operationButtonElement.innerHTML = operationsButtonSymbols[button];
    operationButtonElement.classList.add("calculator-styled-buttons")
    operationButtonElement.addEventListener("click",()=>{
        if(operationsButtonSymbols[button] === "DEL"){
            backSpace();
        }else if(operationsButtonSymbols[button] === "x"){
            operationsButtonSymbols[button] = "*";
        }else if(operationsButtonSymbols[button] === "="){
            equals();
        }else if(operationsButtonSymbols[button] === "ANS"){
            answerMemory();
        }else if(operationsButtonSymbols[button] === "AC"){
            resetMemory();
        }
        else{
            textField.innerHTML += operationsButtonSymbols[button];
        }
    })
    operationsButtonSection.appendChild(operationButtonElement);
}

const backSpace = () =>{
    textField.innerHTML = textField.innerHTML.substring(0, textField.innerHTML.length - 1);
}

const equals = () => {
    let indexOfUpperValue = textField.innerHTML.indexOf("^");
    if(indexOfUpperValue > -1){
        let base = (textField.innerHTML).slice(0, indexOfUpperValue);
        let exponent = (textField.innerHTML).slice(0, indexOfUpperValue + 1)
        answerSection.innerHTML = Function(`return(Math.pow(" + ${base} + "," + ${exponent}))`)();
    }else{
        answerSection.innerHTML += "";
        answerSection.innerHTML = Function(`return(${textField.innerHTML})`)();                           
    }
}

const sinEvaluation = () =>{
    textField.innerHTML = Math.sin(textField.innerHTML);
}
const cosEvaluation = () => {
    textField.innerHTML = Math.cos(textField.innerHTML);
}
const resetMemory = () => {
    textField.innerHTML = "";
    answerSection.innerHTML = "";
}

const answerMemory = () =>{
    let answerMemory = answerSection.innerHTML;
    textField.innerHTML = answerMemory;
}

const calculation = () =>{
    let answerField = "";
    for(let i=0; i<textField.innerHTML.length; i++){
        answerField += textField.innerHTML[i];
    }
    console.log(answerField);
    console.log(percentageConversion(textField.innerHTML));
    answerSection.innerHTML = Function(`return(${answerField})`)();
}
