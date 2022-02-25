// union type
export {}
let code: (string | number);
code = 123;   // OK
console.log(code)
code = "ABC"; // OK
console.log(code)
// code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
console.log(empId)
empId = "E111"; // OK
console.log(empId)
// empId = true; // Compiler Error

/* 
  o/p->
  123
ABC                    
111
E111

*/

function displayType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
// displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
// console.log("hello check")