const fail = (message:string)=>{
    throw new Error(message)
}
// const fail: (message: string) => never
/* 
    here in above function return type is never
*/

const neverex = function(){
    console.log("hello never")
}

// const neverex: () => void
/* 
    in above function return type is void
*/

const sing = function(){
    while(true){
        console.log("Never gonna give you up");
        console.log("Never gonna let you down");
        // console.log("Never gonna make");

    }
}
//const sing: () => never
/* 
    because loop is infinity it will never return 
    so return type is never
*/