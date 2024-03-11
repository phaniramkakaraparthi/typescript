abstract class Department {
  // Make sure that property id is readonly and we can't write to it.
  protected readonly id: string;
  private name: string;
  protected employees: string[] = [];
  static fiscalYear = "2020";

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  static createEmployee(value: string) {
    return { name: value };
  }

  abstract describe(this: Department): void;
  // setter method for employee name setting
  set employeeName(value: string) {
    this.addEmployee(value);
  }
  // getter method for employee name setting
  get employeeName() {
    return this.name;
  }

  public addEmployee(employee: string) {
    this.employees.push(employee);
  }

  public printEmployeeInformation() {
    console.log("Employee Information: " + this.employees);
  }
}

// Accessing static method with class name with out object
// Note that static methods or varialbles can only be accessible from static blocks/methods.
const employee1 = Department.createEmployee("Phani");
console.log(employee1);
console.log(Department.fiscalYear);

// Inheritence
class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  public describe() {
    console.log("Department ID: " + this.id);
  }
}

const it = new ITDepartment("d2", ["Phani", "Sruti"]);
it.describe();
console.log(it);

// const accountingCopy = { name: "DUMMY", describe: accounting.describe };

// accountingCopy.describe();
