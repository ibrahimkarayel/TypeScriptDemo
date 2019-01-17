/*class Customer {
    private name: string;
    private surname: string;

    constructor(name:string, surname:string) {
        this.name = name;
        this.surname = surname;
    }

}*/
class Customer {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        if (this.surname) {
            return `${this.name} ${this.surname}`;
        }
        return name;
    }
}
let c = new Customer('Adem', 'Akdeniz');
c = new Customer('Deniz');
//# sourceMappingURL=06_parameterProperties.js.map