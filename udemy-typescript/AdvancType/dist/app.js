"use strict";
// interface Admin{
//     name:string;
//     privileges:string[];
// };
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') { //ype guards
        return a.toString() + b.toString();
    }
    return a + b;
}
const e2 = {
    name: "vishwjeet",
    privileges: ['creating-server']
};
const e1 = {
    name: "Vishwajeet",
    privileges: ['creating-server'],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log("Name :", emp.name);
    if ("privileges" in emp) {
        console.log("privileges :", emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("start Date :", emp.startDate);
    }
}
printEmployeeInformation(e2);
//---------------------------------------------
class Car {
    drive() {
        console.log("Driving.....");
    }
}
class Truck {
    drive() {
        console.log("Drive a truck");
    }
    loadCargo(amount) {
        console.log("loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive(); //no problem because prop is in both class
    // if("loadCargo" in vehicle)
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'hourse':
            speed = animal.runningSpeed;
    }
    console.log("Moving with speed" + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'hourse', runningSpeed: 20 });
// ------------------Type Casting ------------------------
// const userInputElement=<HTMLInputElement>document.getElementById('user-input')!;
// may clase with react element tag <> because of the angular bracket
// alternative option
// this may cause run time error if value is not there 
// const userInputElement=document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = "Hi there!";
//if value is null then it will not execute statement because we check 1st then executing statement
const userInputElement = document.getElementById('user-input');
if (userInputElement) {
    console.log("hello there");
    userInputElement.value = "Hi there!";
}
/*
    here (userInputElement as HTMLInputElement) valu be checket 1st
    then evaluate (userInputElement as HTMLInputElement).value
*/
//-------------------------87. Index Properties---------------------------
