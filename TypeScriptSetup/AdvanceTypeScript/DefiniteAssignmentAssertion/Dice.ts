// let dice:number;
let dice!:number;//  Definite Assignment Assertion
/* 
    compile time only
    upto us to insure correctness
*/

/* 
    Note no longer need to write in this way
    rollDice();
    console.log("current Dice Value",dice!)
*/

function rollDice(){
    dice =(Math.floor(Math.random()*6) + 1);
}
// rollDice();
// console.log("current Dice Value",dice);//Variable 'dice' is used before being assigned

// two time function call for getting different value which is rendomly assigned
rollDice();
console.log("current Dice Value",dice!);//1

rollDice();
console.log("current Dice Value",dice!);//2 

rollDice();
console.log("current Dice Value",dice!);//5