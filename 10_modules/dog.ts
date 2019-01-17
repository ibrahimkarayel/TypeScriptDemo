import {Animal} from "./animal";
import {Owner as Master} from "./owner";

export class Dog extends Animal {

    private age: number;
    private _owner!: Master;

    constructor(name: string, color: string, age: number) {
        super(name, color);
        this.age = age;
    }

    feed() {
        if (this._owner)
            console.log(`${this._owner.name} feeding me`);
        else
            console.log(`No owner !!!`)
    }

    get owner(): Master {
        return this._owner;
    }

    set owner(value: Master) {
        this._owner = value;
    }
}

class Lion extends Animal {

}
/*export {Lion}*/
export {Lion as BigCat}