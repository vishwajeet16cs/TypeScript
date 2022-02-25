/* 
Object type of type script
which not contain key value pair'
it contain key and type payer

const person: {
    name: string;
    age: number;
}

const person={
    name:"Vishwajeet",
    age:30
};

// console.log(person.nickname)//Property 'nickname' does not exist on type '{ name: string; age: number}

*/


//Object Types
const person:{
    name:string,
    age:number
}={
    name:"Vishwajeet",
    age:30
};

console.log(person.name)