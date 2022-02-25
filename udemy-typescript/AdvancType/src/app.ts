// interface Admin{
//     name:string;
//     privileges:string[];
// };

// interface Employee{
//     name:string;
//     startDate:Date;
// };

// interface ElevatedEmploye extends Admin ,Employee {}

// const e1:ElevatedEmploye={
//     name:"Vishwajeet",
//     privileges:['creating-server'],
//     startDate:new Date()
// }


type Combinable= string|number;
type Numeric =number|boolean;
type Universal = Combinable & Numeric

function add(a:Combinable,b:Combinable){
    if(typeof a==='string' || typeof b==='string'){//ype guards
        return a.toString() + b.toString()
    }
    return a+b;
}


type Admin={
    name:string;
    privileges:string[];
};

type Employee={
    name:string;
    startDate:Date;
};

type ElevatedEmploye=  Admin & Employee

const e2={
    name:"vishwjeet",
    privileges:['creating-server']
}

const e1:ElevatedEmploye={
    name:"Vishwajeet",
    privileges:['creating-server'],
    startDate:new Date()
} 

type unknownEmploy=Employee|Admin;

function printEmployeeInformation(emp:unknownEmploy){
    console.log("Name :",emp.name)
    if("privileges" in emp){
        console.log("privileges :",emp.privileges)
    }
    if("startDate" in emp){
        console.log("start Date :",emp.startDate)
    }
}
 printEmployeeInformation(e2)


 //---------------------------------------------

 class Car{
     drive(){
         console.log("Driving.....");
     }
 }
 class Truck{
     drive(){
         console.log("Drive a truck")
     }
     loadCargo(amount:number){
         console.log("loading cargo ..."+amount)
     }
 }

 type Vehicle= Car| Truck;

const v1=new Car();
const v2=new Truck();

function useVehicle(vehicle:Vehicle){
    vehicle.drive()//no problem because prop is in both class
    // if("loadCargo" in vehicle)
    if(vehicle instanceof Truck)
    {
        vehicle.loadCargo(1000)
    }
}

useVehicle(v1)
useVehicle(v2)

// -----------------------85. Discriminated Unions-------------------
interface Horse{
    type:"hourse";//literal type
    runningSpeed:number;
}

interface Bird{
    type:"bird";
    flyingSpeed:number
}
type Animal=Bird| Horse;

function moveAnimal(animal:Animal){
    let speed;
    switch(animal.type){
        case 'bird':
            speed=animal.flyingSpeed;
            break;

        case 'hourse':
            speed=animal.runningSpeed
    }
    console.log("Moving with speed"+speed)
}

moveAnimal({type:'bird',flyingSpeed:10})
moveAnimal({type:'hourse',runningSpeed:20})


// ------------------Type Casting ------------------------

// const userInputElement=<HTMLInputElement>document.getElementById('user-input')!;
// may clase with react element tag <> because of the angular bracket

// alternative option
// this may cause run time error if value is not there 
// const userInputElement=document.getElementById('user-input')! as HTMLInputElement;
// userInputElement.value = "Hi there!";


//if value is null then it will not execute statement because we check 1st then executing statement
const userInputElement=document.getElementById('user-input');
if(userInputElement){
    console.log("hello there");
    (userInputElement as HTMLInputElement).value = "Hi there!";
}

/* 
    here (userInputElement as HTMLInputElement) valu be checket 1st
    then evaluate (userInputElement as HTMLInputElement).value 
*/


//-------------------------87. Index Properties---------------------------

    