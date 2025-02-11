// To initialize Stack and Symbol Table
var stack = [];
var symbolTable = {};

// The user Input and Display
var inputField;
var evaluateButton;
var outputText = "";

function setup() {
    createCanvas(600, 400);
    background(240);
    textAlign(CENTER, CENTER);
    textSize(16);

    // To create the input field
    inputField = createInput();
    inputField.position(150, 100);
    inputField.size(300);

    // To create the Evaluate Button
    evaluateButton = createButton('Evaluate');
    evaluateButton.position(470, 100);
    evaluateButton.mousePressed(handleEvaluate);
}

function draw() {
    background(240);
    fill(0);

    // Labels
    text("Enter a Postfix++ Expression:", width / 2, 70);
    text("Output:", width / 2, 180);

    // Display Output
    fill(50);
    text(outputText, width / 2, 220);
}

// Handle Evaluate Button Click
function handleEvaluate() {
    var expression = inputField.value();
    outputText = evaluatePostfix(expression);
    inputField.value(''); // Clear input after evaluation
}

////////////// Helper Functions ///////////////////////////////////
function isNumber(token) {
    return !isNaN(token);
}

function isVariable(token) {
    return /^[A-Z]$/.test(token); // Single uppercase letters
}

function isOperator(token) {
    return ['+', '-', '*', '/'].includes(token);
}

function performOperation(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if (b === 0) {
                return "Error: Division by zero";
            }
            return a / b;
        default:
            return "Error: Unknown operator";
    }
}

//////////// Main Interpreter Function (My Algorithm)/////////////////////////
function evaluatePostfix(expression) {
    stack = [];
    var tokens = expression.split(' ');

    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];

        if (isNumber(token)) {
            stack.push(parseFloat(token)); // Push number to stack
        } 
        else if (isVariable(token)) {
            if (symbolTable.hasOwnProperty(token)) {
                stack.push(symbolTable[token]); // Push variable value
            } else {
                stack.push(token); // Might be used in assignment
            }
        } 
        else if (isOperator(token)) {
            if (stack.length < 2) {
                return "Error: Not enough operands for operator " + token;
            }
            var b = stack.pop();
            var a = stack.pop();
            var result = performOperation(a, b, token);
            if (typeof result === 'string') return result; // Handle errors
            stack.push(result);
        } 
        else if (token === '=') {
            if (stack.length < 2) {
                return "Error: Invalid assignment operation";
            }
            var value = stack.pop();
            var variable = stack.pop();
            if (isVariable(variable)) {
                symbolTable[variable] = value; // Assign value to variable
            } else {
                return "Error: Invalid variable name in assignment";
            }
        } 
        else {
            return "Error: Invalid token " + token;
        }
    }

    if (stack.length === 1) {
        return "Result: " + stack.pop();
    } else {
        console.log("Symbol Table:", symbolTable);
        return "Evaluation Complete. Check Console for Symbol Table.";
    }
}
