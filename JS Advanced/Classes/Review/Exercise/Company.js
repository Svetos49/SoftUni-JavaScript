class Company {
    constructor() {
        this.departments = new Map();
    }

    static Employee = class Employee {
        constructor(name, salary, position) {
            this.name = name;
            this.salary = salary;
            this.position = position;
        }
        get name() {
            return this._name;
        }

        set name(value) {
            this._validateParameter(value);
            this._name = value;
        }

        get salary() {
            return this._salary;
        }

        set salary(value) {
            this._validateParameter(value);
            if (value < 0) {
                throw new Error('Invalid input');
            }
            this._salary = value;
        }

        get position() {
            return this._position;
        }

        set position(value) {
            this._validateParameter(value);
            
            this._position = value;
        }


        _validateParameter(value) {
            if (value === undefined || value === null || value === '') {
                throw new Error('Invalid input');
            }
        }
    
        compareTo(other) {
            let result = other.salary - this.salary;
            return result === 0 ? this.name.localeCompare(other.name): result;
        }

        toString() {
            return `${this.name} ${this.salary} ${this.position}`;
        }
    }



    addEmployee(name, salary, position, department) {
        if (department == undefined || department == null || department == '') {
            throw new Error('Invalid input');
        }
        if (!this.departments.has(department)) {
            this.departments.set(department, []);
        }
        let employee = new Company.Employee(name, salary, position);
        let workers = this.departments.get(department);
         workers.push(employee);

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let sortedDepartments = [...this.departments.entries()].sort(([aName, aWorker], [bName, bWorker]) => {
            let aAverageSalary = this._getAverageSalary(aName);
            let bAverageSalary = this._getAverageSalary(bName);

            return bAverageSalary - aAverageSalary;
        });
        let [bestDepartmentName, bestDepartmentWorkers] = sortedDepartments[0];
        bestDepartmentWorkers.sort((a, b) => a.compareTo(b));

        let bestDepartmentString = `Best Department is: ${bestDepartmentName}
Average salary: ${this._getAverageSalary(bestDepartmentName).toFixed(2)}`;
        let workersString = bestDepartmentWorkers.map(x => x.toString()).join('\n');
        return `${bestDepartmentString}\n${workersString}`;
    }
    _getAverageSalary(departmentName) {
        let departmentWorkers = this.departments.get(departmentName);
        let averageSalary = departmentWorkers.reduce((acc, w) => acc + w.salary, 0) / departmentWorkers.length;
        return averageSalary;
    }
}


let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());