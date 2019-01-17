class Stuff {
    public readonly name: string;
    public readonly surname: string;
    public email: string;

    constructor(name: string, surname: string, email: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

/*    constructor(public readonly name: string, public readonly surname: string, public email: string) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }*/
}

let person = new Stuff('Adem', 'Akdeniz', 'adeniz@gmail.com');
//p.surname='karadeniz'; //TS2540: Cannot assign to 'surname' because it is a constant or a read-only property.
person.email = 'akaradeniz';

interface Animal {
    readonly name: string;
}

let dummyShape: Animal = {name: 'Dummy Shape'};
//dummyShape.name='ReadOnly'; //TS2540: Cannot assign to 'name' because it is a constant or a read-only property.

