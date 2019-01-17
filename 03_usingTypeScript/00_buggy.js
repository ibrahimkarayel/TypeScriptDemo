function printNames(persons) {
    for (let person of persons) {
        console.log(person.name);
    }
}
printNames(10);

function printBuggy() {
    document.getElementById("result").innerHTML = printNames(10);
}



function getBuggyRandom(range) {
    return Math.floor(Math.random() * ramge);     // returns a random integer from 0 to given range
}

console.log('Generated Random '+ getRandom("Hey buggy")); // error runtime