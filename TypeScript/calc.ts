import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator(operator: string, num1: number, num2: number): number {
    switch(operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                console.log("Error: Division by zero!");
                return NaN;
            }
        default:
            console.log("Error: Invalid operator!");
            return NaN;
    }
}

rl.question('Enter operator (+, -, *, /): ', (operator: string) =>
    rl.question('Enter first number: ', (num1: string) =>
        rl.question('Enter second number: ', (num2: string) => {
            const parsedNum1 = parseFloat(num1), parsedNum2 = parseFloat(num2);
            var result: number = calculator(operator, parsedNum1, parsedNum2);
            console.log(result);  
            rl.close();
        })
    )
);
