import {Dog, BigCat} from "./dog";
import {makeSound, MONKEYS} from "./monkey";

let lion = new BigCat('Simba', 'Saffron');
console.log(lion);

let dog = new Dog("Lessi", "White", 3);
dog.feed();
console.log("heyyy");


for (let monkey of MONKEYS) {
    console.log(monkey.name);
    makeSound(monkey);
}
