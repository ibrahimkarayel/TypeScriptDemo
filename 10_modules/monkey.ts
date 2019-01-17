class Monkey {
    constructor(public name: string) {
        this.name = name;
    }
}
export let MONKEYS: Monkey[] = [
    new Monkey("M1"),
    new Monkey("M2"),
    new Monkey("M3")];

export function makeSound(monkey: Monkey) {
    console.log(`${monkey.name} made sound !!! `);
}

