class Department {
  private name: string;
  private employees: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public describe(this: Department) {
    console.log("Department: " + this.name);
  }

  public addEmployee(employee: string) {
    this.employees.push(employee);
  }

  public printEmployeeInformation() {
    console.log("Employee Information: " + this.employees);
  }
}

const accounting = new Department("accounting");
console.log(accounting);

accounting.describe();
accounting.addEmployee("Sruti");
accounting.addEmployee("Phani");

accounting.printEmployeeInformation();

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
