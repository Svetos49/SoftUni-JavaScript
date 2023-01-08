// function people() {
//     const TASKS = {
//         JUNIOR: ['is working on a simple task.'],
//         SENIOR: ['is working on a complicated task.',
//             'is taking time off work.',
//             'is supervising junior workers.'],
//         MANAGER: ['scheduled a meeting.',
//             'is preparing a quarterly report.']
//     };

//     class Employee {
//         constructor(name, age, tasks) {
//             this.name = name;
//             this.age = age;
//             this.salary = 0;
//             this.tasks = tasks;
//             this._index = 0;
//         }

//         work() {
//             if(this._index === this.tasks.length) {
//                 this._index = 0;
//             }
//            console.log(this.name + this.tasks[this._index]);

//            this._index++;
//         }

//         collectSalary() {
//            console.log(`${this.name} received ${this.salary} this month.`);
//         }
//     }

//     class Junior extends Employee {
//         constructor(name, age) {
//             super(name, age, TASKS.JUNIOR);
//         }
//     }

//     class Senior extends Employee {
//         constructor(name, age) {
//             super(name, age, TASKS.SENIOR);
//         }
//     }

//     class Manager extends Employee {
//         constructor(name, age) {
//             super(name, age, TASKS.MANAGER);
//             this.dividend = 0
//         }

//         collectSalary() {
//             console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
//          }
//     }

//     return { Junior, Senior, Manager }

// }

function solution() {
    class Employee {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.task = [];
            this.currentTask = 0;
        }

        work() {
            console.log(this.task[this.currentTask]);
            this.currentTask++;
            if (this.task.length - 1 < this.currentTask) {
                this.currentTask = 0;
            }
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }
    }

    class Junior extends Employee{
        constructor(name, age) {
            super(name, age);
            this.task = [`${this.name} is working on a simple task.`]
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.task = [`${this.name} is working on a complicated task.`,
            `${this.name} is taking time off work.`,
            `${this.name} is supervising Junior workers.`]

        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.task = [`${this.name} scheduled a meeting.`,
            `${this.name} is preparing a quarterly report.`];
            this.dividend = 0;
            
        }
        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }
    }
    

    return {
        Employee, Junior, Senior, Manager
    }

}

const classes = solution(); 
const junior =
new classes.Junior('Ivan',25); 
 
junior.work();  
junior.work();  
 
junior.salary = 5811; 
junior.collectSalary();  
 
const sinior =
new classes.Senior('Alex', 31); 
 
sinior.work();  
sinior.work();  
sinior.work();  
sinior.work();  
 
sinior.salary = 12050; 
sinior.collectSalary();  
 
const manager
= new classes.Manager('Tom', 55); 
 
manager.salary = 15000; 
manager.collectSalary();  
manager.dividend = 2500; 
manager.collectSalary();