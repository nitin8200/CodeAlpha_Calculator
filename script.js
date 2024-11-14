let displayElement = document.querySelector('.display');
let currentInput = ''; // Stores the current input sequence

function clearDisplay() {
    currentInput = '';
    updateDisplay('0');
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput || '0');
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function appendOperator(operator) {
    if (currentInput && !isNaN(currentInput.slice(-1))) { // Prevents adding multiple operators consecutively
        currentInput += operator;
        updateDisplay(currentInput);
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay(currentInput);
    } catch (error) {
        updateDisplay('Error');
    }
}

function updateDisplay(value) {
    displayElement.textContent = value;
}
