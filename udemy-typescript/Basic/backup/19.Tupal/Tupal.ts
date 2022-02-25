//Tupal for more restrict array type with index value
// focus on arry concept
const person:{
    name:string,
    age:number,
    hobbies:string[],
    role:[number,string]// tupal to initialize variable type by indexing
}={
    name:"Vishwajeet",
    age:30,
    hobbies:["sports","cooking"],
    role:[2,"author"],//(property) role: (string | number)[]
};

person.role.push("admin");
// person.role[1]=10//Type 'number' is not assignable to type 'string

/* 
Type 'number' is not assignable to type 'string

person.role=[3,"Admin","user"]
 */
let favoriteActivities:string[];
favoriteActivities=["sports"]
