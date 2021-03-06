interface Person {
    name: string;
}
function printResult() {
    let result = printNames([
        {name: "ibrahim"},
        {name: "Steven"},
        {name: "Gul"}
    ]);
    document.getElementById("output").innerHTML = result;

}

//actual function inside the .ts file
function printNames(persons: Person[]): string {
    for (let person of persons) {
        console.log(person.name);
    }
    console.log('printNames: ' + JSON.stringify(persons));
    return JSON.stringify(persons);
}

function getRandom(ramge:number) :number{
    return Math.floor(Math.random() * ramge);     // returns a random integer from 0 to given range
}

console.log('Generated Random '+ getRandom(10));
//printNames(10);
