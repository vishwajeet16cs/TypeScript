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
