/* 
    what is an unknown type?
    How this is different from any?
    How to use unknown?

*/
export {}

//--------------Any----------------------
//Any switch of the power of type script 

let data:any;
data=20;
data="Hello";
let item:string;
item=data;

//-------------unknown--------------------
let dataUnkonown:unknown;
dataUnkonown=20;
dataUnkonown="Hello";
let itemUnknown:string;
// itemUnknown=dataUnkonown
// itemUnknown=dataUnkonown;-->Type 'unknown' is not assignable to type 'string'.

if(typeof dataUnkonown==="string"){
    itemUnknown=dataUnkonown;
}
console.log(itemUnknown)