class Fruit {
    private _color: string;
    public static count=0;

    constructor() {
        Fruit.count++;
    }

    set color(color: string) {
        this._color = color;
    }

    get color(): string {
        return this._color;
    }
}

function playWithStatic() {
    let apple = new Fruit();
    //console.log(apple._color); //TS2341: Property '_color' is private and only accessible within class 'Fruit'.
    apple.color = 'Red';
    console.log(apple.color);
    new Fruit();
    new Fruit();
    new Fruit();
    console.log(Fruit.count);
}

