type Person ={
    name:string,
    email?:string|null|undefined,
};

function sendEmail(email:string){
    console.log("send to email",email)
}
function ensureContactable(person:Person){
    if(person.email==null) throw new Error(`Person ${person.name} is not contactable`);
}

function contact(person:Person){
    ensureContactable(person);
    //sendEmail(person.email)//Argument of type 'string | null | undefined' is not assignable to parameter of type 'string'.
    // Type 'undefined' is not assignable to type 'string'.
    sendEmail(person.email!)
}
// contact({name:"vishwajeet",email:null})//Error: Person vishwajeet is not contactable
// contact({name:"vishwajeet",email:1234})//The expected type comes from property 'email' which is declared here on type 'Person'
contact({name:"vishwajeet",email:"vishwajeet@gmail.com"})//send to email vishwajeet@gmail.com
// contact({name:"vishwajeet",email:undefined})//