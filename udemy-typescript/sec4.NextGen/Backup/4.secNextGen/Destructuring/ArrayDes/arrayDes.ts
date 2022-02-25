const hobbies =["Sports","Cooking"];
const activeHobbies=["Hiking"]
const gym=["pushup","running","liftin"]

/* const hobby1 = hobbies[0]
const hobby2 = hobbies[1] */

// array destructuring

const [hobby1,hobby2,...remainingHobbies]=hobbies;

console.log("hobbies-",hobbies,hobby1,hobby2,remainingHobbies)



