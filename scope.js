

let ceo= 'Kadeem Best'; //this is a global variable
console.log(ceo);
const doSomething = ()=>
{


    ceo='Thanos';
    console.log(ceo);
    const num = 5; // this is a local variable (function scope). This can only be accessed in the doSomething Function


    //i is of block scope(can only be accessed within the for loop)
   if(true)
    {

        ceo='Ayra';
        const test = "blah" // this is of block scope
        console.log(test);
    } 

    // console.log(test) // This will crash because test is of block scope and can only be accessed within the if it was declared

}

//console.log(num);
const doSomething2 = ()=>{


    ceo='Batman';
    console.log(ceo);
    const num = 25; // local variable

    //this will fill  because 
    console.log(num);
}

doSomething();
doSomething2();