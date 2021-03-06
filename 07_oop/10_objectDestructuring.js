class Bird {
    constructor(name, isFly) {
        this.name = name;
        this.isFly = isFly;
        this.name = name;
        this.isFly = isFly;
    }
}
function playWithObjectDestruction() {
    let bird = new Bird('Penguin', false);
    let { name: firstName, isFly: fly } = bird;
    fly = true;
    console.log(firstName);
    console.log(fly);
    // create variables have the same name as the properties,
    let { name, isFly } = bird;
    isFly = false;
    console.log(name);
    console.log(isFly);
}
//func return object
function getBird() {
    return new Bird('Duck', true);
}
function playWithFunctionDestruction() {
    let { name } = getBird();
    console.log(name);
}
//# sourceMappingURL=10_objectDestructuring.js.map