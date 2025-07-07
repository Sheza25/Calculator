let content = "";

function updateDisplay() {
    document.querySelector('#area').value = content;
}

function clearDisplay() {
    content = "";
    updateDisplay();
}

function appendValue(value) {
    content += value;
    updateDisplay();
}

function calculateResult() {
    try {
        content = eval(content).toString();
    } catch (error) {
        content = "Error";
    }
    updateDisplay();
}
