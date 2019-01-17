// shows Named function
function addOperation(x, y) {
    return x + y;
}
//shows an anonymous function.
//let add = function(x, y) { return x + y; };
/*An anonymous function has no name after the function keyword.
But you can assign an anonymous function to a variable*/
let add = function (x, y) {
    return x + y;
};
//TypeScript infers the type of the add-variable in the line above. But we can also be explicit with a type annotation
let addFunc = function (x, y) {
    return x + y;
};
function getBookDetails(title, subTitle, printing = 100) {
    return `${printing}  ${title} -> ${subTitle} `;
}
function log() {
    getBookDetails('CHARLIE JANE ANDERS', 'All the Birds in the Sky', 500);
    getBookDetails('CHARLIE JANE ANDERS', 'All the Birds in the Sky');
    getBookDetails('CHARLIE JANE ANDERS');
}
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
//compiler error -> TS1014: A rest parameter must be last in a parameter list.
/*function buildOtherName(...restOfName: string[], firstName: string, ) {
    return firstName + " " + restOfName.join(" ");
}*/
function callName() {
    let employeeName = buildName("Adem", "Ali", "Ceylan", "Betul");
    console.log(employeeName);
}
class UserLoader {
    loadUserName(callback) {
        callback("Adem");
    }
}
let loader = new UserLoader();
loader.loadUserName(function (loadedName) {
    console.log(loadedName);
});
class User2Loader {
    loadAdminName(callback) {
        callback("Ali");
    }
}
//# sourceMappingURL=01_functions.js.map