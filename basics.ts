function add(num1: number, num2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        let sum = num1 + num2;
        console.log(phrase + sum);
    } else {
        throw new Error('I will not show you a result');
    }
}

let number1: number; //to show what eventually is gonna be stored here
number1 = 5;

const number2 = 2.8; //it's a literal type as it can be a number ONLY
const printResult = true;
const resultPhrase = 'The result is: ';

add(number1, number2, printResult, resultPhrase);
