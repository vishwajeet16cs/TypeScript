/* 
Aliases - give name of the type of variable 
    ex- type Combinable=number|string
    now we can use Combinable instead of-- number|string

*/
type Combinable=number|string;
type ConversionDescription="as-number"|"as-text"

function combine(
    input1:Combinable,
    input2:Combinable,
    resultConversion:ConversionDescription):Combinable{
    let result:Combinable
    if(typeof input1==="number"&& typeof input2==="number"||resultConversion==="as-number"){
        result= +input1 + +input2;
    } 
    else{
        result=input1.toString()+input2.toString()
    }
    return result;
}
const combinedAges = combine(30,26,"as-number")
console.log(combinedAges)

const combinedStringAges = combine("30","26","as-number")
console.log(combinedStringAges)

const combineName = combine("vishwajeet","kumar","as-text")
console.log(combineName)