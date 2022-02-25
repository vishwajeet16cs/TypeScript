class Cat{
    meow(){
        console.log("meow");    
    }
}
class Dog{
    bark(){
        console.log("woof");
    }
}
type Animal =Cat|Dog;

function speak(animal:Animal){
    if(animal instanceof Cat){
        animal.meow()
    }
    if(animal instanceof Dog){
        animal.bark();
    }
}
const dog = new Dog()
const cat = new Cat()
speak(dog)//woof
speak(cat)//meow
// speak(rabbit)// Cannot find name 'rabbit'.