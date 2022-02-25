let leet;
leet="1337";

const number = leet as number;
console.log(number===1337);//false
let newnumber=+leet
console.log(newnumber);
console.log(newnumber===1337);
console.log(number);//'1337'
console.log(1337);//1337


let num;
num="129";
const num1=+num//type number
//js trick to convert string to number
console.log(num1);//129 
console.log("hello check")