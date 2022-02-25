function generteError(message:string, code:number):never{
    throw ({message,errorcode:code});
}

const error=generteError("An error Occure!",500)
console.log(error)//it will not return undefine 
// this function will never return any value so it type is never