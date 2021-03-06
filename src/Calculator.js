const inputField = document.getElementById("input");
const answerField = document.getElementById("answer");

let queue = [];
let input = 0;

function calculateQueue(value){
    if (input !==0) {
    input = parseFloat(input);

        addToQueue(input);
    }
    let answer = value[0];
    let dividedByZero = 0;
    for (  let i = 2; i < value.length; i= i+2) {

        switch (queue[i-1]) {
            case '+':
                answer+= value[i];
                break;
            case '-':
                answer-= value[i];
                break;
            case '/':   
              if (value[i] === 0)   
              dividedByZero = 1;
              else      
              answer = answer / value[i];
                break;
            case'*': 
            answer = answer * value[i];
                break;
        }
    }

    answer = answer.toFixed(10);
    answer = parseFloat(answer);
    if ( dividedByZero === 1) { 
      clearAll();
      inputField.innerHTML =  "ERROR";
    }
    else{
      answerField.innerHTML =  answer ;
      input = answer;
      queue = [];
    }
}

function addToQueue(input){
    queue.push(input);
}

function radiansToDegrees(angle){
    let pi = Math.PI;
    return degrees * (pi/180);
}

function scientificButton(arg){
  switch(arg){
    case 'sin':
        input = Math.sin(radiansToDegrees(input));
        answerField.innerHTML = input;
        break;
    case 'cos':
        input = Math.cos(radiansToDegrees(input));
        answerField.innerHTML = input;
        break;
    case 'tan':
        input = Math.tan(radiansToDegrees(input));
        answerField.innerHTML = input;
        break;
    case 'Abs':
        input = Math.abs(input);
        answerField.innerHTML = input;
        break;
    case 'log':
        input = Math.log(input);
        answerField.innerHTML = input;
        break;
    case 'x^2':
        input = Math.pow(input, 2);
        answerField.innerHTML = input;
        break;
    case 'x^3':
        input = Math.pow(input, 3);
        answerField.innerHTML = input;
        break;
    case '%':
        input = input * 1/100;
        answerField.innerHTML = input;
        break;
    case 'acos':
        input = Math.acos(radiansToDegrees(input));
        answerField.innerHTML = input;
        break;
    case 'asin':
        input = Math.asin(radiansToDegrees(input));
        answerField.innerHTML = input;
        break;
    case 'atan':
        input = Math.atan(radiansToDegrees(input));
        answerField.innerHTML = input;
        break;
    case '&radic;':
        input = Math.sqrt(input);
        answerField.innerHTML = input;
        break;
    case '&#x221B;':
        input = Math.cbrt(input);
        answerField.innerHTML = input;
        break;
  }
}

function clearAll() {
    queue = [];
    input = 0;
    answerField.innerHTML = "";
    inputField.innerHTML = "0";
}

function numericButton(arg){
    if ( inputField.innerHTML ===  "ERROR" || (inputField.innerHTML == "0" && arg != ".")){                     
        inputField.innerHTML = ""; 
    }
    if (!(arg === ".") || !input.match(/[.]/)) {

    input += arg;
    inputField.innerHTML += arg;
    }
}


function operatorButton(arg){
    if (input !== 0 && input !== "-") {
        input = parseFloat(input);
        addToQueue(input);
        addToQueue(arg);
        inputField.innerHTML +=arg;
        input = 0;
    }
    if (arg == "-"  && isNaN(queue[0]) && input !== "-"){
      input ="-";
      inputField.innerHTML = "-";
  }
}
