document.addEventListener('DOMContentLoaded', function () {
    // Greeting
    const greetingDiv = document.getElementById('greeting');
    const userName = prompt("Hello! I am Precious Obioma. It's nice to meet you. What is your name?");
    greetingDiv.textContent = `You are welcome, ${userName}!`;

    // Calculator
    const userInputDiv = document.getElementById('user-input');
    userInputDiv.textContent = 'Enter an expression: ';

    const calculatorDiv = document.getElementById('calculator');
    const buttons = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        '0', '.', '=', '/'
    ];
} )