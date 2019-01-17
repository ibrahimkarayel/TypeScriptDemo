class Fruit {
    constructor() {
        Fruit.count++;
    }
    set color(color) {
        this._color = color;
    }
    get color() {
        return this._color;
    }
}
Fruit.count = 0;
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
//# sourceMappingURL=08_accessorsAndStatic.js.map