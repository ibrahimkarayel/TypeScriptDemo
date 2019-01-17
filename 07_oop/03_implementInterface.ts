interface MoveBehavior {
    distanceInMeters: number;

    move(distance: number);

    //move();
}

interface SoundBehavior {
    makeSound();

}

class Cheetah implements MoveBehavior, SoundBehavior {
    distanceInMeters: number;

    makeSound(): void {
        console.log('meow meow');
    }

    move(distance: number = 0) {
        console.log(distance);
    }

}

interface Foo {
    bar(s: string): number;

    bar(n: number): string;
}

class FooClass implements Foo {
    public bar(s: string): number;
    public bar(n: number): string;
    public bar(arg: string | number) {
        if (typeof arg === 'number')
            return arg.toString();
        if (typeof arg === 'string')
            return arg.length;
    }
}

