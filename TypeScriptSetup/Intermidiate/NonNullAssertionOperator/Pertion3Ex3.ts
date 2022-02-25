type Person ={
    name:string,
    email?:string|null|undefined
}
function sendEmail(email:Person){
    console.log("send email to",email.email);
}

function ensureContactable(person:Person){
    if(person.email==undefined) throw Error(`Person ${person.name} is not contactable`);
}

function contact(person:Person){
    ensureContactable(person)
    sendEmail(person)
}

