type DiceValue=1|2|3|4|5|6;
function rollDice(){
    return (Math.floor(Math.random()*6)+1) as DiceValue;
}
// if(rollDice()===7){
//     throw new Error('Not possible!');
// }
console.log(rollDice())//4
console.log(rollDice())//3
console.log(rollDice())//1
console.log(rollDice())//3