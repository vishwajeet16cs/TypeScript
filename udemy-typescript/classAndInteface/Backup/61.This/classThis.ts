export{}
class Department{
    name:string;
    constructor(n:string){
        this.name=n;
    }
    describe(this:Department){
        console.log(this.name)
    }
}

const accounting = new Department("vishwajeet");

// console.log(accounting)
//object literal

const accountingCopy={
    name:"jeet",
    describe:accounting.describe};
accountingCopy.describe()

accounting.describe