// default parameter
/* default parameter can only be asignedathe last of parameter list
   add=(a:number,b:number=2) correct
   add=(a:number=2,b:number) wrong
*/
export{}
const add=(a:number=1,b:number=2):number=>{
    return a+b
}
console.log(add(5))//7
console.log(add(3,4))//7
console.log(add())//3   

const sub=(a:number=1,b:number):number=>{
    return a+b
}
// console.log(sub(5))//error-->An argument for 'b' was not provided.
console.log(sub(3,4))//
// console.log(sub())//error -->An argument for 'a' was not provided. 