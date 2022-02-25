//

export {}
/* const add=(...num:number[])=>{
    return num.reduce((curResult,curValue)=>{
        return curResult+curValue;
    },0)
}
const addedNumbers = add(1,2,3);
console.log(addedNumbers) */

const add=(...num:[number,number,number])=>{
    return num.reduce((curResult,curValue)=>{
        return curResult+curValue;
    },0)
}
const addedNumbers = add(1,2,3);
console.log(addedNumbers)