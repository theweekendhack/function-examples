

//doSomething(); //this will succeed because function declarations are  hoisted!

//Function Declaration hoist their functions!
function doSomething()
{
    console.log(`Function Declaration`);
}




//doSomething2(); //this will fail because function expressions are not hoisted!

const doSomething2 = function()
{
    console.log(`Function Expression`);
}

//doSomething3(); //this will fail because arrow functions are not hoisted!

const doSomething3 = ()=>
{
    console.log(`Array Function`);
}