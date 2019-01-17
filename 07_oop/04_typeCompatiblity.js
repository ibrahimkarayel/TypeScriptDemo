class Circle {
    method(input) {
        return 0;
    }
}
class Square {
    method(input) {
        return 0;
    }
}
class Triangle {
    method(input) {
        return input;
    }
}
let cat = new Circle(); // OK, because member exists
let shape = new Circle(); // OK because their structure is exactly the same.
//let shape2: Square = new Triangle(); // Error because their structure is not the same.
class Printer {
    print() {
    }
}
class HtmlPrinter {
    print() {
    }
}
class PdfPrinter {
    print() {
    }
}
let htmlPrinter = new HtmlPrinter();
//let pdfPrinter: Printer = new PdfPrinter(); //  Property 'print' is private in type 'PdfPrinter' but not in type 'Printer'.
//# sourceMappingURL=04_typeCompatiblity.js.map