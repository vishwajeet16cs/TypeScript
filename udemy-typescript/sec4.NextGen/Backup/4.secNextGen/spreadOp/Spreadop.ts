export{}
const hobbies =["Sports","Cooking"];
const activeHobbies=["Hiking"]
const gym=["pushup","running","liftin"]

// activeHobbies.push(hobbies)//error->Argument of type 'string[]' is not assignable to parameter of type 'string'
activeHobbies.push(hobbies[0])//correct


//spread Operator
activeHobbies.push(...hobbies)

console.log(activeHobbies)
console.log("hello")


