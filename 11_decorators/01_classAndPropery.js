var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
* Component-function that is such a decorator factory.
* The function itself has the parameters name and surname.
* It returns a function that matches the required signature for a class decorator.*/
function Component(name, surname) {
    return function MyDecorator(target) {
    };
}
let User = class User {
};
User = __decorate([
    Component("Hale", "Demir")
], User);
function OtherComponent(data) {
    return function OtherComponent(target) {
    };
}
let LogUser = class LogUser {
};
__decorate([
    logAccessor,
    __metadata("design:type", Date)
], LogUser.prototype, "loginDate", void 0);
LogUser = __decorate([
    OtherComponent({
        name: "Hale",
        surname: "Demir"
    })
], LogUser);
function logAccessor(target, propertyKey) {
    let value = this[propertyKey];
    let setter = (newValue) => {
        value = newValue;
        console.log(`set ${propertyKey}: ${value}`);
    };
    // define a getter
    let getter = () => {
        console.log(`get ${propertyKey}: ${value}`);
        return value;
    };
    // replace the property
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
let user = new LogUser();
user.loginDate = new Date();
let date = user.loginDate;
//# sourceMappingURL=01_classAndPropery.js.map