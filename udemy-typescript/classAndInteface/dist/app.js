"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        if (phrase) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log("Hi");
        }
    }
}
const newPerson = new Person("vishwajeet");
const newPerso = new Person();
newPerson.greet("this is hello");
/* let user1:Person;

user1={
    name:"vishwajeet",
    // age:30,
    greet(phrase:string){
        console.log(phrase +" " +this.name)
    }
}
user1.greet("hi there") */ 
