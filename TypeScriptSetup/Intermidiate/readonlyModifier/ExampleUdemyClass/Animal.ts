class Animal{
  public  readonly name:string;
    constructor(name:string){
        this.name=name
    }
}
const sheep=new Animal('sheap');
console.log(sheep.name)//Allow--sheep
// sheep.name="wolf"//--error(not allow)
//read only is only compile time error checking doesn't require run time js support
//we cant combine read only with access modifiers 