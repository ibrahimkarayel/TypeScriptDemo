"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dog_1 = require("./dog");
const monkey_1 = require("./monkey");
let lion = new dog_1.BigCat('Simba', 'Saffron');
console.log(lion);
let dog = new dog_1.Dog("Lessi", "White", 3);
dog.feed();
console.log("heyyy");
for (let monkey of monkey_1.MONKEYS) {
    console.log(monkey.name);
    monkey_1.makeSound(monkey);
}
