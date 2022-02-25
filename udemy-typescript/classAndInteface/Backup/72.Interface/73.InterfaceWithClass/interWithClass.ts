
interface Greetable{
    name:string;
    age?:number;

    greet(phrase:string):void;
}

class Person implements Greetable{
    name:string;
    age=30
    constructor(n:string){
        this.name=n;
    } 

    greet(phrase:string){
        console.log(phrase+' '+this.name)
    }
}

const newPerson =new Person("vishwajeet")
newPerson.greet("this is hello")

