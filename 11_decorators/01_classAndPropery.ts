/*
* Component-function that is such a decorator factory.
* The function itself has the parameters name and surname.
* It returns a function that matches the required signature for a class decorator.*/
function Component(name: string, surname: string) {
    return function MyDecorator(target: Function) {
    }
}

@Component("Hale", "Demir")
class User {

}

interface ComponentData {
    name: string;
    surname: string;
}

function OtherComponent(data: ComponentData) {
    return function OtherComponent(target: Function) {
    }
}

@OtherComponent({
    name: "Hale",
    surname: "Demir"
})
class LogUser {
    @logAccessor
    loginDate: Date;

}

function logAccessor(target: Object, propertyKey: string) {
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
        Object.defineProperty(
            target, propertyKey, {
                get: getter,
                set: setter
            });
    }
}

let user = new LogUser();
user.loginDate = new Date();
let date = user.loginDate;
