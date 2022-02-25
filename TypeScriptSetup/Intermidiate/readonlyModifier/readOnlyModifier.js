// Note - we can initialize the value at the time of declaration of the variable 
// or use constructor
var person = /** @class */ (function () {
    function person() {
        this.name = "vishwajeet";
    }
    return person;
}());
var aPerson = new person();
console.log(aPerson.name);
// aPerson.name="amarjeet"//Cannot assign to 'name' because it is a read-only property
console.log("hello");
//--------------------------Using constructor ------------------
//Notes- using constructor we can initialize the value to read only variable
var emp = /** @class */ (function () {
    function emp(name) {
        this.name = name;
    }
    return emp;
}());
var aemp = new emp("amarjeet");
console.log(aemp.name); //amarjeet
console.log("hello");
