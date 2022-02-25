type Person ={
    name:string,
    email?:string|null|undefined,
};

function sendEmail(email:Person){
    console.log("send to email",email.email)
}
sendEmail({name:"vishwajeet"})//send to email undefined
sendEmail({name:"vishwajeet",email:null})//send to email null
sendEmail({name:"vishwajeet",email:undefined})//send to email undefine
// sendEmail({name:"vishwajeet",email:123})//not allow