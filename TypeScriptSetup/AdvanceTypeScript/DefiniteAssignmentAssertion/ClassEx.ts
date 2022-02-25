class Point {
    x!:number;
    y!:number;
    constructor(){
       this.moveRandom()
    }
    moveRandom(){
        this.x=Math.random();
        this.y=Math.random();
    }
}
/* 
    if ! is not given it will give compile time error 
    X & y is not define
    but X And Y is define - so !=>represent  Definite Assignment Assertion
    it's our way to tell compiler x and y is defined you need not to worry 
*/