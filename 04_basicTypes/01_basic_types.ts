function playWithNumber() {
    // number
    let n: number = 25;
    console.log(n);

    n = 0x21; // hex
    console.log(n);

    n = 0b11001; // binary
    console.log(n);

    n = 0o44; // octal
    console.log(n);

}

function playWithBoolean() {
    let n: number = 25;
    let b: boolean = true;
    b = false;
    b = !!(n); // n == 0 ? false : true
    b = !!(null); // false
    let isVisible: boolean = true;
    console.log(n);


//isVisible = "hidden"; // Error: string not assignable to Boolean
}


function playWithString() {
    let num: number = 20;
    let s: string = 'ibrahim';
    s = "Denny";
    s = `The number is ${num}`; // The number is 20
    let msg: string = `Welcome ${s},
how are you?`;
    console.log(msg);
}

function playWithArray() {
    // array
    let userNames: string[] = ["ibrahim", "Gul", "Dennis"];
    let numArray: number[] = [1, 2, 3, 4, 5];
    let fruits: Array<string> = ["Apple", "Banana", "Cherry"];
    let vegetables: Array<string> = ["Broccoli", "Corn", "Tomato"];
    let anyArray: any[] = [1, "2"];
    anyArray = [fruits, vegetables]
    console.log(anyArray)
    anyArray = [...fruits, ...vegetables]
    console.log(anyArray)
}

function playWithTuple() {
    // tuple
    let point3d: [number, number, number] = [1, 3, 3];
    let point2d: [number, number] = [5, 5];

    let option: [string, boolean] = ["uppercase", true];
    //option[2] = "yes"; // Works, as tuple has string
    console.log(option);
    //option[2] = false; // Works, as tuple has boolean
    console.log(option);
// option[4] = 11; // Error: 1 is not assignable to string|boolean
}


function playWithEnum() {
//enum
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right,
    }

    let d: Direction = Direction.Up;
    console.log(d);

    let dirName: string = Direction[3]; // name will be “Left”
    console.log(dirName);

    enum DirectionS {
        Up = "UP",
        Down = "DOWN",
        Left = "LEFT",
        Right = "RIGHT",
    }

    let ds: DirectionS = DirectionS.Up;
    console.log(ds);
    let dirNameS: string = DirectionS['Up']; // name will be “Up”
    console.log(dirNameS);

}

function playWithAny() {

    let notSure: any = 4;
    notSure = "maybe a string instead";
    notSure = false; // okay, definitely a boolean


}

//With noImplicitAny set to true, you get compile-time errors for function parameters that are implicitly any.

/*{
    "noImplicitAny": true,
}*/

/*

function printFirstName(friend) {
    console.log(friend.firstName);
}
function printFirstName(friend:any ) {
    console.log(friend.firstName);
}

*/

function playWithTypeAssertions() {
    let firstName: any = "ibrahim";
    let len: number = firstName.length;
    let len1: number = firstName.lengh;// typed as lengh wrongly The TypeScript compiler does not check this, as you’re working on the any type.
    let len2: number = (firstName as string).length;

    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
}


//Declaring variables of type void is not useful because you can only assign undefined or null to them:
function playWithVoid() {
    let unusable: void;
    console.log(unusable);
    unusable = undefined;
    console.log(unusable);
    unusable = null;
    console.log(unusable);
}

function printSomething(): void {
    console.log("This is my  message");
}

//never
function error(message: string): never {
    throw new Error(message);
}

//let foo: never = 155; // Error: Type number is not assignable to never

let bar: never = (() => {
    throw new Error('Throw')
})();

function append(text: string, appendix: string | number): string {
    if (typeof appendix === "number") {
        return text + Array(appendix).join(" ");
    }
    if (typeof appendix === "string") {
        return text + appendix;
    }
// Here appendix has the type never
}


function playWithObject() {
    let o: object = {
        name: "ibrahim"
    }
    console.log(o);

    let o2: { name: string } = {
        name: "Anna"
    };
    console.log(o2);
}

function playWithNullUndefined() {
    let userName: string = "ibrahim";
    userName = null; // OK
    userName = undefined; // OK
    console.log(userName);
    let age: number = 30;
    age = null;
    console.log(age);
    age = undefined;

    let isVisible: boolean = false;
    isVisible = false;
    isVisible = undefined;

   /* let name: string | null = "ibrahim";
    name = null; // Ok
    name = undefined; // Error*/


}
