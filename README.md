Postfix++ Expression Evaluator

Overview

This project is an interactive Postfix++ expression evaluator, built using p5.js. It allows users to input mathematical expressions written in postfix notation (Reverse Polish Notation) and evaluates them, including support for variables and assignments.

Features

User Input & Display: Users enter expressions into an input field, and the evaluated result is displayed on-screen.

Postfix Expression Evaluation: Supports numeric calculations using postfix notation (e.g., 3 4 + → 7).

Variable Handling: Allows the use of single uppercase letter variables (e.g., A = 5, A 3 + → 8).

Error Handling: Detects invalid tokens, division by zero, and incorrect operations.

Symbol Table Management: Maintains a record of assigned variables and their values.

Technologies Used

p5.js – For UI rendering and user interaction.

JavaScript – For expression parsing and evaluation.

How It Works

The user enters a postfix expression (e.g., 5 3 +).

The interpreter parses and evaluates the expression using a stack.

Supports basic arithmetic operations (+, -, *, /).

Variables can be assigned and used in further calculations (A = 10, A 2 * → 20).

The result is displayed on the canvas, while the symbol table logs variable assignments in the console.

Example Usage

Basic Arithmetic

Input:

5 3 +

Output:

Result: 8

Variable Assignment and Usage

Input:

A = 10
A 2 *

Output:

Result: 20

Potential Enhancements

Add support for multi-character variable names.

Implement parentheses handling for infix notation support.

Extend functionality to support exponentiation (^) and modulo (%).

Store and display the symbol table dynamically in the UI.

Installation & Setup

Clone this repository:

git clone https://github.com/yourusername/postfix-evaluator.git

Open index.html in your browser to run the project.

Modify sketch.js to extend functionality as needed.

Contributing

Feel free to fork the repository and submit pull requests with enhancements and bug fixes.

License

This project is open-source and available under the MIT License.
