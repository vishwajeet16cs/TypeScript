// Type Object 
/* 
 default typed object 
 update property
 add new proprty
 define a custom type for object 
 use any with object
*/

//  hello
export {}
/* 
interface Typed{
    name:string,
    age:number,
    address:string 
}
// const h:number=10
// console.log(h)
let users:Typed={
    name:'bruce',
    age:30,
    address:"USA"
}
console.log(users) */
//----------------------------------------------
/* let users:any={
    name:'bruce',
    age:30,
    address:"USA"
}
users.age="two",
console.log(users) */

// o/p-->{ name: 'bruce', age: 'two', address: 'USA' }
//----------------------------------------------
let users={
    name:'bruce',
    age:"two",
    address:"USA"
}

console.log(users)