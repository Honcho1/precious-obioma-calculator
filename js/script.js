document.addEventListener('DOMContentLoaded', function () {
    // Greeting
    const greetingDiv = document.getElementById('greeting');
    const userName = prompt("Hello! I am Precious Obioma. It's nice to meet you. What is your name?");
    greetingDiv.textContent = `You are welcome, ${userName}!`;

    // Calculator
    const userInputDiv = document.getElementById('user-input');
    userInputDiv.textContent = '';

    const calculatorDiv = document.getElementById('calculator');
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
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
        } else if (value === 'C') {
            userInputDiv.textContent = '';
        } else {
            userInputDiv.textContent += value;
        }
    }
});
