const main = (()=>{
    

    /*
       
        2. No-Arg Functions
        3. Functions that return value
    */


       // 1.Paratimized Functions(Return no Value)
        const printTimeTables = (tables)=>
        {

            
            console.log(`See the ${tables} below : `)
            for(let i=1; i<=12; i++)
            {
                const answer= i * tables;

                console.log(`${i} X ${tables}=${answer}`);
            }


        }


        //No-Arg Function (Function returns no values)
        const displayAMessage = ()=>{

            console.log("I love programming");
        }




        //Function that return a value
        /*  
            Write a function that calculates 
            the sum of two numbers

        */

        const sumOfTwoNumbers = (number1, number2)=>{

            const sum = number1+ number2;//local variable (function scope)

            return sum; // a return statement;

        }
        

       /* printTimeTables(2);
        displayAMessage();*/

       console.log(sumOfTwoNumbers(5,10))
       console.log(sumOfTwoNumbers(2,3));
       console.log(sumOfTwoNumbers(6,90));

})();