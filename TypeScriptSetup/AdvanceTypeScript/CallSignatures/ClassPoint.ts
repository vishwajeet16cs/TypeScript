// type PointCreator = new(x:number,y:number)=>{x:number,y:number};
type PointCreator = {
    //multiple contructor over load
    new(x:number,y:number):{x:number,y:number};
    new(x:number,y:number,z:number):{x:number,y:number,z:number};

    // multiple function over load
    (x:number,y:number):{x:number,y:number}
    (x:number,y:number,z:number):{x:number,y:number,,z:number}
}

/* const Point:PointCreator =class{
    constructor(public x: number, public y:number,public z:number){
    }
} */