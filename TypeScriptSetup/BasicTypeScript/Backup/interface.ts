/* 
  Interface in TypeScript
  Why use interface
  How to use interface
  Interface example with object 

  syntax 
      interface onterface_name{
        property_type:data_type,
        property_type:data_type,
      }
*/ 
export {}
interface userType{
  name:string,
  age:number,

}
let users={
  name:"vishwajeet",
  age:23,
  getName:function(){
    console.log("Hello from inside function")
  }
}
console.log(users)
users.getName()