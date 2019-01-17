"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Dog extends animal_1.Animal {
    constructor(name, color, age) {
        super(name, color);
        this.age = age;
    }
    feed() {
        if (this._owner)
            console.log(`${this._owner.name} feeding me`);
        else
            console.log(`No owner !!!`);
    }
    get owner() {
        return this._owner;
    }
    set owner(value) {
        this._owner = value;
    }
}
exports.Dog = Dog;
class Lion extends animal_1.Animal {
}
exports.BigCat = Lion;
