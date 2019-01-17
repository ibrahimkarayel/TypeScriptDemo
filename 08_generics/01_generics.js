function playWithGenericArray() {
    let names = ['Ahmet', 'Deniz', 'Meryem'];
    let otherNames = ['Ahmet', 'Deniz', 'Meryem'];
    otherNames.push('Mikail');
    // otherNames.push(10); //TS2345: Argument of type '10' is not assignable to parameter of type 'string'.
    console.log(names);
    console.log(otherNames);
    let numbers = new Array();
    numbers.push(1, 2, 3);
    console.log(numbers);
    let name = printToConsole('Mehmet');
    let num = printToConsole(7);
}
// Generic Function
function printToConsole(item) {
    console.log(item);
    return item;
}
class User {
    constructor(name) {
        this.name = name;
    }
}
//Generic class
class GenericRepository {
    constructor() {
        this._items = new Array();
    }
    create(item) {
        this._items.push(item);
    }
    findAll() {
        return this._items;
    }
    exist(item) {
        return this._items.includes(item);
    }
}
function playWithGenericClass() {
    let userRepo = new GenericRepository();
    userRepo.create(new User('Cemil'));
    userRepo.create(new User('Delal'));
    let users = userRepo.findAll();
    console.log(JSON.stringify(users));
    for (let user of users) {
        console.log(user);
    }
}
//# sourceMappingURL=01_generics.js.map