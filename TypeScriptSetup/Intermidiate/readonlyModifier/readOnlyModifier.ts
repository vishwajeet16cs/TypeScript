// Note - we can initialize the value at the time of declaration of the variable 
// or use constructor 
class person{
    readonly name="vishwajeet"; 
}
var aPerson = new person();
console.log(aPerson.name)
// aPerson.name="amarjeet"//Cannot assign to 'name' because it is a read-only property
console.log("hello")


//--------------------------Using constructor ------------------
//Notes- using constructor we can initialize the value to read only variable
class emp{
    readonly name;
    constructor(name:string){
        this.name=name;
    }
}
var aemp = new emp("amarjeet");
console.log(aemp.name)//amarjeet
console.log("hello")