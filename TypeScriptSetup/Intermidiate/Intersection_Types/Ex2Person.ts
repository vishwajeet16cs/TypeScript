type Person={
    name:string,
}

type Email={
    email:string,
}

type Phone ={
    phone:string,
}
type ContactDetails=Person&Email&Phone

// function contact(details:Person&Email&Phone)
function contact(details:ContactDetails)
{
    console.log(`Dear ${details.name} 
    Your email id ${details.email}.
    and ypur phone no ${details.phone}`)
}
contact({name:'Vishwajeet',email:"vish@gmail.com",phone:"1234"})
// console.log("hello check")