function getBuggyFullName(user) {
    let fullName = user.name;
    if (user.surname) {
        fullName += ' ' + user.surname;
    }
    return fullName;
}

interface User {
    name: string;
    surname: string;
    age?: number; // define optional members by using a question mark (?)
}

function getFullName(user: User): string {
    let fullName = user.name;
    if (user.surname) {
        fullName += ' ' + user.surname;
    }
    console.log(`name: ${user.name} surname: ${user.surname} age: ${user.age} `);
    return fullName;
}

function playWithInterface() {
    console.log(getFullName({name: 'ibrahim', surname: 'KARAYEL'}));
    console.log(getFullName({name: 'ibrahim', surname: 'KARAYEL', age: 30}));
}
