
interface AddFn{
    (a:number,b:number):number
}
let add:AddFn
add=(n1:number,n2:number)=>{
    return n1+n2
}


interface Greetable {
    name?:string;
    greet(phrase:string):void;
}

class Person implements Greetable{
    name?:string;
    age=30
    constructor(n?:string){
        this.name=n;
    } 

    greet(phrase:string){
        if(phrase){
            console.log(phrase+' '+this.name)
        }
        else{
            console.log("Hi")
        }
    }
}

const newPerson =new Person("vishwajeet")
const newPerso =new Person()
newPerson.greet("this is hello")
