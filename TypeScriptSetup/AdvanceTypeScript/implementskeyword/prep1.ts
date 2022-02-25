export {}
type Animal={
    name?:string,
    ownername:string,
    voice():string,
};

function log(animal:Animal){
    console.log(`Animal ${animal.ownername}: ${animal.name}`)

}
// log({
//     ownername:"vishwajeet",
//     name:"tom"
// })

class Cat implements Animal{
    name:"Tom";
    ownername: "vishwajeetcls";
    // constructor(ownername)
    voice(): string {
        
        return `${this.name}miow ${this.ownername}`
    }
}

const cat =new Cat()
console.log(cat)