export{}
let userInput:unknown;
let userInputAny:any
let userName:string;

userInput=5;
userInput="hello";

userInputAny=5;
userInputAny="hello"

// userName=userInput//error
//Type 'unknown' is not assignable to type 'string

userName=userInputAny//no error

if(typeof userInput==="string"){
    userName=userInput//no Error
}


function generteError(message:string, code:number):never{
    throw ({message,errorcode:code});
}

const error=generteError("An error Occure!",500)
console.log(error)//it will not return undefine 
// this function will never return any value so it type is never