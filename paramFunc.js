const main = (()=>
{


    const displayWelcomeMessage = (name)=>{

        console.log(`Hey, nice to meet you ${name} `);
    }
    
    
    const displayWelcomeMessageAltered = (name,age)=>{
    
        const complimentAge = age -5;
    
        console.log(`Hey ${name}, wow, you don't look like a day over ${complimentAge}`);
    }
    
    
    //NO Args function/ No Param function
    const displayGeneralMessge = ()=>{
    
        console.log(`hey`);
    }
    
    
    //Function Invocation/ FUnction call
    displayWelcomeMessage("Beyonce");
    displayWelcomeMessage("Adele");;
    
    displayWelcomeMessageAltered("Bruce Wayne",51);
    displayWelcomeMessageAltered("Dianna Prince", 31);


})();





