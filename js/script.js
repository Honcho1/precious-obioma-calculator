document.addEventListener('DOMContentLoaded', function () {
    // Greeting
    const greetingDiv = document.getElementById('greeting');
    const userName = prompt("Hello! I am Precious Obioma. It's nice to meet you. What is your name?");
    greetingDiv.textContent = `You are welcome, ${userName}!`;

    // Calculator
    const userInputDiv = document.getElementById('user-input');
    
    // Create Calculator buttons
    const calculatorDiv = document.getElementById('calculator');
    const buttons = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '*',
        '0', '.', '=', '/'
    ];

    buttons.forEach(buttonValue => {
        const button = document.createElement('button');
        button.textContent = buttonValue;
        button.addEventListener('click', () => handleButtonClick(buttonValue));
        calculatorDiv.appendChild(button);
    });

    function handleButtonClick(value) {
        if (value === '=') {
            try {
                userInputDiv.textContent = eval(userInputDiv.textContent);
            } catch (error) {
                userInputDiv.textContent = 'Error';
            }
        } else {
            userInputDiv.textContent += value;
        }
    }
});
