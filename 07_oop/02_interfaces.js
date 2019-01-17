function getBuggyFullName(user) {
    let fullName = user.name;
    if (user.surname) {
        fullName += ' ' + user.surname;
    }
    return fullName;
}
function getFullName(user) {
    let fullName = user.name;
    if (user.surname) {
        fullName += ' ' + user.surname;
    }
    console.log(`name: ${user.name} surname: ${user.surname} age: ${user.age} `);
    return fullName;
}
function playWithInterface() {
    console.log(getFullName({ name: 'ibrahim', surname: 'KARAYEL' }));
    console.log(getFullName({ name: 'ibrahim', surname: 'KARAYEL', age: 30 }));
}
//# sourceMappingURL=02_interfaces.js.map