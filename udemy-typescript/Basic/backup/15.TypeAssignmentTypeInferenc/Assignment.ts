function add(n1:number,n2:number,showResult:boolean,phrase:string){
    const result =n1+n2;
    if(showResult){
        console.log(phrase+result)
    }
    else{
        return result;
    } 
    
}

/* 
'const' declarations must be initialized.
const number1:number
number1=4 */

//if some thing is initialize letter must define type at the time of declaration
let number1:number
// number1=5;

const number2=2.8;
const printResult=true;

let resultPhrase="Result is :"

/*  dec + init--> variable autometicaly take type of variable initialize it self */
// resultPhrase=5//Type 'number' is not assignable to type 'string'

add(number1,number2,printResult,resultPhrase)

