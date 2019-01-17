function playWithNumber() {
    // number
    let n = 25;
    console.log(n);
    n = 0x21; // hex
    console.log(n);
    n = 0b11001; // binary
    console.log(n);
    n = 0o44; // octal
    console.log(n);
}
function playWithBoolean() {
    let n = 25;
    let b = true;
    b = false;
    b = !!(n); // n == 0 ? false : true
    b = !!(null); // false
    let isVisible = true;
    console.log(n);
    //isVisible = "hidden"; // Error: string not assignable to Boolean
}
function playWithString() {
    let num = 20;
    let s = 'ibrahim';
    s = "Denny";
    s = `The number is ${num}`; // The number is 20
    let msg = `Welcome ${s},
how are you?`;
    console.log(msg);
}
function playWithArray() {
    // array
    let userNames = ["ibrahim", "Gul", "Dennis"];
    let numArray = [1, 2, 3, 4, 5];
    let fruits = ["Apple", "Banana", "Cherry"];
    let vegetables = ["Broccoli", "Corn", "Tomato"];
    let anyArray = [1, "2"];
    anyArray = [fruits, vegetables];
    console.log(anyArray);
    anyArray = [...fruits, ...vegetables];
    console.log(anyArray);
}
function playWithTuple() {
    // tuple
    let point3d = [1, 3, 3];
    let point2d = [5, 5];
    let option = ["uppercase", true];
    //option[2] = "yes"; // Works, as tuple has string
    console.log(option);
    //option[2] = false; // Works, as tuple has boolean
    console.log(option);
    // option[4] = 11; // Error: 1 is not assignable to string|boolean
}
function playWithEnum() {
    //enum
    let Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Right"] = 4] = "Right";
    })(Direction || (Direction = {}));
    let d = Direction.Up;
    console.log(d);
    let dirName = Direction[3]; // name will be “Left”
    console.log(dirName);
    let DirectionS;
    (function (DirectionS) {
        DirectionS["Up"] = "UP";
        DirectionS["Down"] = "DOWN";
        DirectionS["Left"] = "LEFT";
        DirectionS["Right"] = "RIGHT";
    })(DirectionS || (DirectionS = {}));
    let ds = DirectionS.Up;
    console.log(ds);
    let dirNameS = DirectionS['Up']; // name will be “Up”
    console.log(dirNameS);
}
function playWithAny() {
    let notSure = 4;
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
    let firstName = "ibrahim";
    let len = firstName.length;
    let len1 = firstName.lengh; // typed as lengh wrongly The TypeScript compiler does not check this, as you’re working on the any type.
    let len2 = firstName.length;
    let someValue = "this is a string";
    let strLength = someValue.length;
}
//Declaring variables of type void is not useful because you can only assign undefined or null to them:
function playWithVoid() {
    let unusable;
    console.log(unusable);
    unusable = undefined;
    console.log(unusable);
    unusable = null;
    console.log(unusable);
}
function printSomething() {
    console.log("This is my  message");
}
//never
function error(message) {
    throw new Error(message);
}
//let foo: never = 155; // Error: Type number is not assignable to never
let bar = (() => {
    throw new Error('Throw');
})();
function append(text, appendix) {
    if (typeof appendix === "number") {
        return text + Array(appendix).join(" ");
    }
    if (typeof appendix === "string") {
        return text + appendix;
    }
    // Here appendix has the type never
}
function playWithObject() {
    let o = {
        name: "ibrahim"
    };
    console.log(o);
    let o2 = {
        name: "Anna"
    };
    console.log(o2);
}
function playWithNullUndefined() {
    let userName = "ibrahim";
    userName = null; // OK
    userName = undefined; // OK
    console.log(userName);
    let age = 30;
    age = null;
    console.log(age);
    age = undefined;
    let isVisible = false;
    isVisible = false;
    isVisible = undefined;
    /* let name: string | null = "ibrahim";
     name = null; // Ok
     name = undefined; // Error*/
}
//# sourceMappingURL=01_basic_types.js.map