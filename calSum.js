/*
        Write a program that prompts the user to enter two numbers.

        Your program must calculate the sum of the two numbers but you MUST
        create a function called sumOfTwoNumbers to calculate the sum

*/

const prompt = require("prompt-sync")();

const main = (()=>{


    
    const sumOfTwoNumbers = (number1, number2)=>{

        const sum = number1+ number2;//local variable (function scope)

        return sum; // a return statement;

    }


    const num1 = parseFloat(prompt("Please enter a number:"));
    const num2= parseFloat(prompt("Please enter another number : "));


    const sum = sumOfTwoNumbers(num1,num2);

    console.log(`The sum of ${num1} + ${num2} = ${sum}`);




})();