type User={
    name:string,
    age:number,
};
const Users:User[]=[
    {name:"vishwajeet",age:23},
    {name:"Amarjeet",age:21}
]
function getUserAge(name:string):number{
    const user = Users.find(
        user=>user.name===name
    )
    if(user==null){
        throw new Error(`User not found: ${name}`);
    }
    return user.age;
}
console.log(getUserAge("vishwajeet"));//23
console.log(getUserAge("Amarjeet"));//21
// console.log(getUserAge("praveen"));//User not found: praveen