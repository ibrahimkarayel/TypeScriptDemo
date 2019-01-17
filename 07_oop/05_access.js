class Person {
    constructor(name) {
        this.salary = 10;
        this.name = name;
    }
    getSalary() {
        return this.salary;
    }
    setSalary(salary) {
        this.salary = salary;
    }
    printDetails() {
        console.log(`Name: ${name} : age: ${this.age} salary: ${this.salary} `);
    }
}
let p = new Person('Anna');
console.log(p.name);
console.log(p.getSalary());
//console.log(p.age); //TS2445: Property 'age' is protected and only accessible within class 'Person' and its subclasses.
//# sourceMappingURL=05_access.js.map