class Department{
    protected employees:string[]=[];
    public firstName="Hello"
    constructor(private readonly id: string,public name:string){
        name=name;
        id=id;
    }
    describe(){
        console.log(`Department (${this.id}):${this.name}`)
    }
    addEmployee(employee:string){
       
        // this.id="12"//cnat assigne new value because it is read only
        this.employees.push(employee);
    }
    printEmployeeInformetion(){
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

// class ItDepartment extends Department{
//     admins: string[]
//     constructor(id:string, admins:string[]){
//         super(id,"It")//take paramenter of parrent constructor
//         this.admins=admins
//         this.name="from It"//possible
//         // this.id="123"//Not possible
//     }
    
// }

// const it = new ItDepartment("12",["max"]);
// console.log(it.firstName)

// // it.describe();
// it.addEmployee("vishwajeet")
// it.addEmployee("amarjeet")

class AccountingDepartment extends Department{
    constructor(id:string,private reports:string[]){
        super(id,'Accouning');

    }


    addEmployee(name: string) {
        if(name==="min"){
            return
        }
        this.employees.push(name)
    }
    addReport(text:string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports)
    }
}


const account = new AccountingDepartment("29",["min"]);
// console.log(it.firstName)
console.log(account)

account.addEmployee("Max")
account.addEmployee("min")
account.addEmployee("min")

console.log("-------------------------")
account.printEmployeeInformetion()


// it.employees[2]="raju"// after making prop private we cant use this method
// it.employees[5]="raju"

// it.describe();
// it.printEmployeeInformetion();


