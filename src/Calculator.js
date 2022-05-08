
const numericButtonSymbols = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0", "."];
const operationsButtonSymbols = ["DEL", "AC", "*", "/", "+", "-", "ANS", "="];
const scientificSymbols = ["Abs", "Log", "sin", "cos", "tan", "(", ")", "ln", "%", "n!", "e", "x<sup>2</sup>", "x<sup>3</sup>", "x<sup>y</sup>"]
const textField = document.getElementById("calculator__top-field");
const numericButtonSection = document.getElementById("calculator__bottom-normal-button-numeric");
const operationsButtonSection = document.getElementById("calculator__bottom-normal-button-operations");
const answerSection = document.getElementById("calculator__top-answer");
const scientificButtonSection = document.getElementById("calculator___bottom-scientific-button");


for(let button=0; button<numericButtonSymbols.length; button++){
    const NormalbuttonElement = document.createElement("button");
    NormalbuttonElement.innerHTML = numericButtonSymbols[button];
    NormalbuttonElement.classList.add("calculator-styled-buttons");
    NormalbuttonElement.addEventListener("click",()=>{
        textField.innerHTML += numericButtonSymbols[button];
    })
    numericButtonSection.appendChild(NormalbuttonElement);
}

for(let button=0; button<scientificSymbols.length; button++){
    const scientificButtonElement = document.createElement("button");
    scientificButtonElement.innerHTML = scientificSymbols[button];
    scientificButtonElement.classList.add("calculator-styled-buttons");
    scientificButtonSection.appendChild(scientificButtonElement);
}


for(let button=0; button<operationsButtonSymbols.length; button++){
    const operationButtonElement = document.createElement("button");
    operationButtonElement.innerHTML = operationsButtonSymbols[button];
    operationButtonElement.classList.add("calculator-styled-buttons")
    operationButtonElement.addEventListener("click",()=>{
        if(operationsButtonSymbols[button] === "DEL"){
            backSpace();
        }
        else if(operationsButtonSymbols[button] === "="){
            calculation();
        }else if(operationsButtonSymbols[button] === "ANS"){
            answerMemory();
        }else if(operationsButtonSymbols[button] === "AC"){
            resetMemory();
        }
        else{
            textField.innerHTML += operationsButtonSymbols[button]
        }
    })
    operationsButtonSection.appendChild(operationButtonElement);
}


const backSpace = () =>{
    textField.innerHTML = textField.innerHTML.substring(0, textField.innerHTML.length - 1);
}

const resetMemory = () => {
    textField.innerHTML = "";
    answerSection.innerHTML = "0";
}

const answerMemory = () =>{
    let answerMemory = answerSection.innerHTML;
    textField.innerHTML = answerMemory;
    console.log(textField)
}

const calculation = () =>{
    answerSection.innerHTML = Function(`return(${textField.innerHTML})`)();
}
