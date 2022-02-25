/* interface Admin={
    name:string;
    privileges:string[];
};

interface Employee={
    name:string;
    startDate:Date;
};

interface ElevatedEmploye=  Admin & Employee

const e1:ElevatedEmploye={
    name:"Vishwajeet",
    privileges:['creating-server'],
    startDate:new Date()
} 
*/

interface Admin{
    name:string;
    privileges:string[];
};

interface Employee{
    name:string;
    startDate:Date;
};

interface ElevatedEmploye extends Admin ,Employee {}

const e1:ElevatedEmploye={
    name:"Vishwajeet",
    privileges:['creating-server'],
    startDate:new Date()
}