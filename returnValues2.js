const main = (()=>{


        const sumOfTwoNumbers = (number1, number2)=>{

            const sum = number1+ number2;//local variable (function scope)

            return sum; // a return statement;

        }

        /*Write a function that finds the cube of a number*/

        const calculateCube = (number)=>{

            const cube = number ** 3;

            return cube;
        }


        /*Write a function that calculates the gross salary of a hourly paid employee*/
        
        const calculateGrossSalary = (rate, hoursWorked)=>{

            const grossSal = rate * hoursWorked;

            return grossSal;
        }

        /*Write a functon that calculates the incomeTax of an eployee. The income tax is calcualted by applying 25% of  gross salary*/



        const calclateIncomeTax = (gs)=>{

            const INCOME_TAX_RATE = (25/100);
            const incomeTax = INCOME_TAX_RATE* gs;

            return incomeTax;
        }

        const sal = calculateGrossSalary(10,15);

        const tax = calclateIncomeTax(sal);

        console.log(`The gross Salary = ${grossSal.toFixed(2)}`);


})();