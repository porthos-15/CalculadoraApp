document.addEventListener('DOMContentLoaded', () => {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('button');

    let currentInput = '';
    let operator = '';
    let result = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.textContent;

            if (!isNaN(value) || value === '.') {
                currentInput += value;
                display.value = currentInput;
            } else if (value === 'C') {
                currentInput = '';
                operator = '';
                result = 0;
                display.value = '';
            } else if (value === '=') {
                if (operator && currentInput) {
                    switch (operator) {
                        case '+':
                            result += parseFloat(currentInput);
                            break;
                        case '-':
                            result -= parseFloat(currentInput);
                            break;
                        case '*':
                            result *= parseFloat(currentInput);
                            break;
                        case '/':
                            result /= parseFloat(currentInput);
                            break;
                    }
                    display.value = result;
                    currentInput = '';
                    operator = '';
                }
            } else {
                operator = value;
                if (currentInput) {
                    result = parseFloat(currentInput);
                    currentInput = '';
                }
            }
        });
    });
});
