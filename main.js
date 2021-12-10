const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput () {
    return parseInt(userInput.value)
}

function CreateAndWriteOutput (operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription)
}

function add (){
    const enterednumber = getUserNumberInput();
    const initialResult =  currentResult;
   currentResult = currentResult + enterednumber;
   CreateAndWriteOutput('+', initialResult, enterednumber);
}

function subtract(){
    const enterednumber = getUserNumberInput();
    const initialResult =  currentResult;
   currentResult = currentResult - enterednumber;
   CreateAndWriteOutput('-', initialResult, enterednumber);
}

function multiply () {
    const enterednumber = getUserNumberInput();
    const initialResult =  currentResult;
   currentResult = currentResult * enterednumber;
   CreateAndWriteOutput('*', initialResult, enterednumber);
}

function divide () {
    const enterednumber = getUserNumberInput();
    const initialResult =  currentResult;
   currentResult = currentResult / enterednumber;
   CreateAndWriteOutput('/', initialResult, enterednumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

