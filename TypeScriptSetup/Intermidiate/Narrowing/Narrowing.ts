function padLeft(value:string,padding:number|string){
    if(typeof padding ==="number"){
        return Array(padding+1).join(" ")+value
    }
    if(typeof padding ==="string"){
        return padding + value;
    }
    throw new Error(`Expected number or string, got ${padding}.`)
}
padLeft('Hello World',4);//   Hello world
padLeft('Hello World','  ');//  ---Hello world
padLeft('Hello World','----');//Hello world
console.log(padLeft('Hello World',4))
console.log(padLeft('Hello World','  '))
console.log(padLeft('Hello World','----'))
// console.log("hello check")