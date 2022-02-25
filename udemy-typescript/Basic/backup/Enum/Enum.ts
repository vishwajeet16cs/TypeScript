enum Role{ADMIN,Read_ONLY,AUTHOR};

const person={
    name:"Vishwajeet",
    age:30,
    hobbies:["sports","cooking"],
    role:Role.ADMIN
};

if(person.role===Role.AUTHOR){
    console.log("is Author")
}