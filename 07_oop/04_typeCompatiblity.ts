interface Shape {
    name: string;
}

class Circle {
    name: string;

    method(input: string): number {
        return 0;
    }

}

class Square {
    name: string;

    method(input: string): number {
        return 0;
    }
}

class Triangle {
    name: string;

    method(input: string): string {
        return input;
    }

}

let cat: Shape = new Circle(); // OK, because member exists
let shape: Square = new Circle(); // OK because their structure is exactly the same.
//let shape2: Square = new Triangle(); // Error because their structure is not the same.

class Printer {
    public print() {
    }
}

class HtmlPrinter {
    public print() {
    }
}

class PdfPrinter {
    private print() {
    }
}
let htmlPrinter: Printer = new HtmlPrinter();
//let pdfPrinter: Printer = new PdfPrinter(); //  Property 'print' is private in type 'PdfPrinter' but not in type 'Printer'.