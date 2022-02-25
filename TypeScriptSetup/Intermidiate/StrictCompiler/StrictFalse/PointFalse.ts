class Point{
    x:number;
    y:number;
    move(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}

// Create
const point = new Point();
// point.x=0;
// point.y=0;

//use
point.move(1,3)
console.log(point.x,point.y)//1,3