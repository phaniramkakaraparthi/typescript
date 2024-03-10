function sum(num1: number, num2: number, showResult: boolean, phrase: string){
    if (showResult) {
        const result = num1 + num2;
        console.log(phrase + result);
    }
    else {
        return num1 + num2;
    }
}

const num1 = 2.5;
const num2 = 2.9;
const printResult = true;
const resultPhrase = 'Result: ';

sum(num1, num2, printResult, resultPhrase );

