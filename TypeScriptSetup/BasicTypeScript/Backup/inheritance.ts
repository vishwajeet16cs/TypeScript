export {}
class Parent {
  name:string;
  setName(name):void
  {
   this.name=name
  }
}
class  Child extends Parent{
  getName():string
  {
    return this.name
  }
}
let c1=new Child()
c1.setName("vishwajeet")
console.log(c1.getName())

class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}

let sam = new Snake("hello");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);