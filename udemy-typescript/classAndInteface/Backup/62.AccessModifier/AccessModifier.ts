class Department{
    name:string;
    private employees:string[]=[];
    constructor(n:string){
        this.name=n;
    }
    describe(){
        console.log(this.name)
    }
    addEmployee(employee:string){
        this.employees.push(employee);
    }
    printEmployeeInformetion(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department("vishwajeet");

// accounting.describe();
accounting.addEmployee("vishwajeet")
accounting.addEmployee("amarjeet")


// accounting.employees[2]="raju"// after making prop private we cant use this method
// accounting.employees[5]="raju"

accounting.describe();
accounting.printEmployeeInformetion();


/* const accountingCopy={
    name:"jeet",
    describe:accounting.describe};
accountingCopy.describe()

accounting.describe */