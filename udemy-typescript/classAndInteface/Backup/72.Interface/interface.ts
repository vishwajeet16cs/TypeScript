//interface give structure not the value (no initalization)
// in interface we seperate prop by ; but in obj ,
interface Person{
    name:string;
    age:number;

    greet(phrase:string):void;
}


let user1:Person;

user1={
    name:"vishwajeet",
    age:30,
    greet(phrase:string){
        console.log(phrase +" " +this.name)
    }
}
user1.greet("hi there")