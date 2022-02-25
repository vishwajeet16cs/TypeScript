export {}
/* Any VS UnKnown */
let exampleAny:any;
let exampleUnknown:unknown;

//any 
exampleAny=123;
console.log(exampleAny)
exampleAny="Hello People";
console.log(exampleAny)

//unknown
exampleUnknown=123;
console.log(exampleUnknown)
exampleUnknown="Example Unknown";
console.log(exampleUnknown)

//any
exampleAny.allows.anything.you.can.imagine();
let anySetBool:boolean=exampleAny;