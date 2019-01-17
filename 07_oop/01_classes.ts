class Cat {
    name: string;
    eat: string;
    private age: number;
    protected color?: string;

    constructor(name: string, eat: string, age: number, color?: string) {
        this.name = name;
        this.eat = eat;
        this.age = age;
        this.color = color;
    }

    makeSound(): void {
        console.log('meow meow');
    }

    move(distanceInMeters: number = 0) {
        console.log(`Cat moved ${distanceInMeters}m.`);
    }

}

function playWithCat() {
    let cat = new Cat('Max', 'fish', 1);
    console.log(cat);
    console.log(`${cat.name} eats ${cat.eat}`);
    cat.makeSound();

    let otherCat = new Cat('Tom', 'meat', 2, 'White');
    console.log(otherCat);
    console.log(otherCat.move(100));

    //let badCat=new Cat('Oscar', 'Meat'); //TS2554: Expected 3-4 arguments, but got 2.
}

