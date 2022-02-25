const person={
    name:"Vishwajeet",
    age:30,
    hobbies:["sports","cooking"]
};

let favoriteActivities:string[];// not single string it is array of string
// favoriteActivities="sports"//Type 'string' is not assignable to type 'string[]
// favoriteActivities=["sports",1]//Type 'number' is not assignable to type 'string'
favoriteActivities=["sports"]
console.log(person.name)

for(const hobbies of person.hobbies){
    console.log(hobbies.toUpperCase())
    // console.log(hobbies.map)//Property 'map' does not exist on type 'string'
}