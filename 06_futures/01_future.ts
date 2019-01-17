function playWithTemplateStrings() {
    let name = 'Mike';
    let message = `Hi ${name}  `;
    let poem = `To live! Like a tree alone and free 
    Like a forest in brotherhood
    `;
    console.log(message);
    console.log(`${poem}Nazim Hikmet Ran`);
}

function playWithLiterals() {

    type Status = "ACTIVE" | "INACTIVE" | "CANCEL";
    let currStatus: Status;
    currStatus = "ACTIVE";
    // currStatus = "DELETED";  //TS2322: Type '"DELETED"' is not assignable to type 'Status'.
    let zeroOrOne: 0 | 1;
    // zeroOrOne=10;//TS2322: Type '10' is not assignable to type '0 | 1'.
    let result: true | false; // Type boolean
    result = true;

}

function getPort(url: "http" | "https" | "default"): 80 | 443 {
    switch (url) {
        case "https":
            return 443;
        case "http":
        case "default":
            return 80;
    }
}

const httpPort = getPort("http"); // Type 80 | 443


let playWithForOfLoop = function () {
    let letters: string[] = ['A', 'B', 'C'];
    let numbers: number[] = [10, 20, 30, 40, 50];

    console.log("for in loop letters");
    for (let s in letters) {
        console.log(`${s} - ${letters[s]}`);
    }
    console.log("for in loop numbers");
    for (let n in numbers) {
        console.log(`${n} - ${numbers[n]}`);
    }

    console.log("for of loop letters ");
    for (let s of letters) {
        console.log(s);
    }
    console.log("for of loop numbers ");
    for (let n of numbers) {
        console.log(n);
    }
}

function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}

//compiler error -> TS1014: A rest parameter must be last in a parameter list.
/*function buildOtherName(...restOfName: string[], firstName: string, ) {
    return firstName + " " + restOfName.join(" ");
}*/
function playWithRestParameters() {
    let employeeName = buildName("Adem", "Ali", "Ceylan", "Betul");
    console.log(employeeName);
}

function playWithDestructuring() {

    /*Array destructuring*/
    let arr = [1, 2, 3, 4, 5];
    let [x, y, z] = arr;
    console.log(`x: ${x} y: ${y} z: ${z}`);

    /*Swapping variables*/
    let a = 500;
    let b = 600;
    [a, b] = [b, a];
    console.log(`a: ${a} b: ${b}`);

    var [v1, ...v2] = [1, 2, 3];
    console.log(v1); // 1
    console.log(v2); // [2, 3]

    let person = {name: 'cristiano', age: 32};
    let {name: pName, age: pAge} = person;
    console.log(`Name: ${pName} Age: ${pAge} `);
}

function playWithSpreadOperator() {
    let array1 = [2, 3, 4, 5, 6];
    let array2 = [1, ...array1, 5];
    console.log(`Array 2: ${array2}`);

    let copy = [...array1];
    console.log(`Copied Values: ${copy}`);


    let first = [10, 20];
    let second = [30, 40];
    let all = [0, ...first, ...second, 100];
    console.log(all);

    let userDefault = {name: "Can", surname: "Bozbay"};
    let complete = {...userDefault, age: 30};
    console.log(complete);
}


function playWithArrowFunction() {


    // Arrow function with parameters and returns some value
    let inc = (x) => x + 1;
    console.log(inc(10));

    let add: (baseValue: number, increment: number) => number =
        function (x: number, y: number): number {
            return x + y;
        };
    add(10, 20);

    // Arrow function with no parameters but returns some value
    let log = () => {
        console.log("Log Me");
    };
    log();

    // Arrow function with parameters but no return value
    let printName = (username: string): void => {
        console.log(username);
    };
    printName("Celal");


}