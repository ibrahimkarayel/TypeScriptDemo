function playWithGenericArray() {
    let names: string[] = ['Ahmet', 'Deniz', 'Meryem'];
    let otherNames: Array<string> = ['Ahmet', 'Deniz', 'Meryem'];
    otherNames.push('Mikail');
    // otherNames.push(10); //TS2345: Argument of type '10' is not assignable to parameter of type 'string'.
    console.log(names);
    console.log(otherNames);
    let numbers = new Array<number>();
    numbers.push(1, 2, 3);
    console.log(numbers);
    let name: string = printToConsole('Mehmet');
    let num: number = printToConsole(7);

}

// Generic Function
function printToConsole<T>(item: T): T {
    console.log(item);
    return item;
}


class User {
    constructor(private name: string) {
    }
}

// Generic Interface
interface Repository<T> {
    findAll(): T[];

    exist(item: T): boolean;

    create(item: T): void;

}

//Generic class
class GenericRepository<T> implements Repository<T> {
    private _items = new Array<T>();

    create(item: T): void {
        this._items.push(item);
    }

    findAll(): T[] {
        return this._items;
    }

    exist(item: T): boolean {
        return this._items.includes(item);
    }

}


function playWithGenericClass() {
    let userRepo = new GenericRepository<User>();
    userRepo.create(new User('Cemil'));
    userRepo.create(new User('Delal'));
    let users: Array<User> = userRepo.findAll();
    console.log(JSON.stringify(users));
    for (let user of users) {
        console.log(user);
    }

}