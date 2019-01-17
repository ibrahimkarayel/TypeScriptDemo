class Stuff {
    constructor(name, surname, email) {
        this.name = name;
        this.surname = surname;
        this.email = email;
    }
}
let person = new Stuff('Adem', 'Akdeniz', 'adeniz@gmail.com');
//p.surname='karadeniz'; //TS2540: Cannot assign to 'surname' because it is a constant or a read-only property.
person.email = 'akaradeniz';
let dummyShape = { name: 'Dummy Shape' };
//dummyShape.name='ReadOnly'; //TS2540: Cannot assign to 'name' because it is a constant or a read-only property.
//# sourceMappingURL=07_readonly.js.map