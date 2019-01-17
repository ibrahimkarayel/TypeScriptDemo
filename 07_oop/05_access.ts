class Person {
    public name: string;
    private salary: number = 10;
    protected age: number;

    constructor(name) {
        this.name = name;
    }

    public getSalary(): number {
        return this.salary;
    }

    public setSalary(salary: number) {
        this.salary = salary;
    }

    printDetails(): void {
        console.log(`Name: ${name} : age: ${this.age} salary: ${this.salary} `)
    }
}
let p = new Person('Anna');
console.log(p.name);
console.log(p.getSalary());
//console.log(p.age); //TS2445: Property 'age' is protected and only accessible within class 'Person' and its subclasses.





