function playWithVar() {
    var name = "ibrahim";
    //   var name = "Deniz"; // OK you can redeclare name as var
    for (var i = 1; i < 4; i++) {
        console.log(i);
    }
    if (i == 4) {
        var x = 20;
    }
    console.log('i is: ' + i);
    console.log('var X is: ' + x);
}

console.log(name);

function playWithLet() {
    let surname = "KARAYEL";
    // let surname = "KARACA"; //Compile-error Block scoped variables cannot be redeclared
    for (let i = 1; i < 4; i++) {
        console.log(i);
    }
    //TS2304: Cannot find name 'i'. as “let” is block-scoped
    /* if (i==4){
         var x=20;
     }*/
    if (surname === 'KARAYEL') {
        let x = 20;
        console.log(surname);
    }
    // console.log('Let x is: '+ x); //TS2304: Cannot find name 'x'. as “let” is block-scoped
}

function playWithShadowLet() {
    let userName: string = "karayel";
    {
        let userName: string = "ikarayel";
        console.log(userName); // prints "karayel”
    }
    console.log(userName); // prints “ikarayel”
}

function fLet(x) {
    //  let x = 100; // error: interferes with parameter declaration
}

function playWithBeforeAccess() {
    console.log(globalLetName);
    console.log(globalVarName);
    // console.log(day); //Compiler error Variable might not have been initialized
    console.log(afterDay);
    let day: string = "Sunday";
    var afterDay: string = "Monday";
}

//playWithBeforeAccess(); // error call before globalLetName declared
let globalLetName: string = 'Im Global let';
let globalVarName: string = 'Im Global var';
playWithBeforeAccess(); // ok call after globalLetName declared

function playWithConst() {
    const PI: number = 3.14;
    console.log(PI);
    // PI = 3.15; // TS2540: Cannot assign to 'PI' because it is a constant or a read-only property.
}

function playWithConstObject() {
    const car:any = {type: "BMW", model: "i8", color: "white"};
    car.color = "red"; // You can change a property:
    //car['owner'] = "ibrahim"; // You can add a property:
    car.owner = "ibrahim"; // You can add a property: use any type
    console.log(car);
    //car = {type:"Volvo", model:"EX60", color:"red"}; // ERROR TS2540: Cannot assign to 'car' because it is a constant or a read-only property.
    const cars = ["Audi", "Volvo", "BMW"];
    cars[0] = 'Toyota';
    cars.push('Mercedes');
    console.log(...cars);
    const otherCar =Object.freeze({type: "BMW", model: "i8", color: "white"});//To make an object’s values immutable, use Object.freeze().
   // otherCar.color='Red'; //TS2540: Cannot assign to 'color' because it is a constant or a read-only property.
}



