"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//--------------Any----------------------
//Any switch of the power of type script 
let data;
data = 20;
data = "Hello";
let item;
item = data;
//-------------unknown--------------------
let dataUnkonown;
dataUnkonown = 20;
dataUnkonown = "Hello";
let itemUnknown;
// itemUnknown=dataUnkonown;-->Type 'unknown' is not assignable to type 'string'.
if (typeof dataUnkonown === "string") {
    itemUnknown = dataUnkonown;
}
console.log(itemUnknown);
