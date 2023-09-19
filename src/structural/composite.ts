interface Employee {
  getName(): string;
  getSalary(): number;
}

export class Developer implements Employee {
  constructor(private name: string, private salary: number) {}
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  develop() {}
}

export class Designer implements Employee {
  constructor(private name: string, private salary: number) {}
  getName(): string {
    return this.name;
  }
  getSalary(): number {
    return this.salary;
  }
  design() {}
}

export class Organization {
  private employees: Employee[] = [];

  addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  getEmployees(): Employee[] {
    return this.employees;
  }

  getNetSalaries(): number {
    let netSalary = 0;
    this.employees.forEach((employee) => {
      netSalary += employee.getSalary();
    });
    return netSalary;
  }
}

const organization = new Organization();

organization.addEmployee(new Developer("John", 500));
organization.addEmployee(new Developer("Jane", 600));
console.log(organization.getEmployees());
