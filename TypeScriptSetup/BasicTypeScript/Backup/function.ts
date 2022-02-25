/* 
  Define a normal function:
  Define function type
  Add params in function
  Define Params type
  Optional params with type
*/
export {}
/* function Cals(a:number,b):number
{
  return a
}
console.log(Cals(100,"hello"))//100
 */
//hello check 
function Cals(a:number,b?:number):number
{
  return a+b
}
console.log(Cals(100))//NAn

function Cals1(a:number,b:number){
  return a+b
}
console.log(Cals1(10,20))//30

function Calc2(a:number,b?:number){
  return b?a+b:a
}
console.log(Calc2(100))//100

let myAdd: (baseValue: number, increment: number) => number = function (x: number,y: number): number {
  return x + y;
};
console.log(myAdd(10,10))//20