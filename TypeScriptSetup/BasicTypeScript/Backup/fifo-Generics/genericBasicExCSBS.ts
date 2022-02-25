/* function Users(data:object):Object
{
    return   data
}
console.log(Users({name:"anil",age:"30"})) */


/* function Users(data:string):string
{
    return   data
}
console.log(Users(123)) */
// error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

//------------------------------------

/* 
function Users<T>(data:T):T
{
    return   data
    // if no return then give error
}
console.log(Users(20)) //20
console.log(Users("vishwajeet")) //vishwajeet
console.log(Users(true)) //true 
*/

//----------------------------------------
function Users<T>(data:T):T
{
    return  data
    // if no return then give error
}
console.log(Users({name:"vishwajeet",age:23}))//{ name: 'vishwajeet', age: 23 } 
console.log(Users({name:"vishwajeet",age:23}).age) //23
