
const numericButtonSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operationsButtonSymbols = ["DEL", "AC", "x", "/", "+", "-", "ANS", "="];
const textField = document.getElementById("calculator__top-field");
const numericButtonSection = document.getElementById("calculator__bottom-normal-button-numeric");
const operationsButtonSection = document.getElementById("calculator__bottom-normal-button-operations");
const answerSection = document.getElementById("calculator__top-answer");
const NUMBER_OF_OPERATIONS_BUTTONS = 8;


for(let button=0; button<numericButtonSymbols.length; button++){
    const NormalbuttonElement = document.createElement("button");
    NormalbuttonElement.innerHTML = numericButtonSymbols[button];
    NormalbuttonElement.classList.add("calculator-styled-buttons")
    NormalbuttonElement.addEventListener("click" , ()=>{
        textField.innerHTML += numericButtonSymbols[button];
    })
    numericButtonSection.appendChild(NormalbuttonElement);
}


for(let button=0; button<operationsButtonSymbols.length; button++){
    const operationButtonElement = document.createElement("button");
    operationButtonElement.innerHTML = operationsButtonSymbols[button];
    operationButtonElement.classList.add("calculator-styled-buttons")
    operationButtonElement.addEventListener("click", ()=>{
        if(operationsButtonSymbols[button] === "DEL")
            backSpace();
        if(operationsButtonSymbols[button] === "=")
            calculation();
        else
            textField.innerHTML += operationsButtonSymbols[button]
            
    })
    operationsButtonSection.appendChild(operationButtonElement);
}

const backSpace = () =>{
    textField.innerHTML = textField.innerHTML.substring(0, textField.innerHTML.length - 1);
}

const calculation = () =>{
    answerSection.innerHTML = Function(`return(${textField.innerHTML})`)();
    return answerSection;
}
