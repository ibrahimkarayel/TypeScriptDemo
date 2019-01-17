"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Monkey {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
exports.MONKEYS = [
    new Monkey("M1"),
    new Monkey("M2"),
    new Monkey("M3")
];
function makeSound(monkey) {
    console.log(`${monkey.name} made sound !!! `);
}
exports.makeSound = makeSound;
