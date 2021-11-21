const main = ()=>{

    let sum=0; //this variable can be accessed by both innerFunction1 and innerFunction2

    const innerFunction1 = ()=>{
        
        sum+=5;

        const sqr= sum**2; //this variable is a local variable

        console.log(`The sum value innerFunction1is ${sum}`);
        console.log(`The sqr value innerFunction1 is ${sqr}`);
    }

    const innerFunction2 =()=>{
        
        sum+=10;

        const sqr2= sum**2; //this variable is a local variable

        console.log(`The sum value innerFunction2 is ${sum}`);
        console.log(`The sqr value innerFunction2 is ${sqr2}`);

    }




};




