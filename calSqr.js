
const prompt = require("prompt-sync")();

const main = (()=>{
  

    /*Write a function that finds the cube of a number*/

    const calculateCube = (number)=>{

        const cube = number ** 3;

        return cube;
    }


    const number1= parseInt(prompt("Please enter a number: "));

    const answer = calculateCube(number1);

    console.log(`The cube of ${number1} is = ${answer}`);


})();