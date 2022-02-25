import { SumArgs } from "./type";
import { namefirst } from "./type";
import {namelast} from "./type"
// let namefirst=11;

// here namefirst===string
let firstname:namefirst
firstname="vishwajeet"
// lastname=123//not allowe
console.log(firstname)

let lastname:namefirst
lastname:"singh"
console.log(lastname)
// lastname:123;


 
//  let someStringVar: string = String(9)
 function sum({firstArgument,secondArgument}:SumArgs){
     return firstArgument+ secondArgument;
 }
 console.log(sum({firstArgument:1,secondArgument:2}))