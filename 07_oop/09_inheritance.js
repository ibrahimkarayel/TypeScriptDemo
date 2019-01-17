class Book {
    /* readonly ISBN: string;*/
    constructor(author, title) {
        this.author = author;
        this.title = title;
    }
}
class SinceFiction extends Book {
    constructor(author, title, printing) {
        super(author, title);
        this.printing = printing;
    }
    printDetail() {
        console.log(`author: ${this.author} title: ${this.title} Number of Print: ${this.printing} `);
    }
}
function playWithBook() {
    let book = new SinceFiction('CHARLIE JANE ANDERS', 'All the Birds in the Sky', 100);
    console.log(book);
    book.printing = 500;
    book.title = 'All the Birds';
    console.log(book);
    book.printDetail();
}
class Comics extends Book {
    constructor(author, title, subTitle) {
        super(author, title);
        this.subTitle = subTitle;
    }
    /*
    constructor(author: string, title: string) { //TS2392: Multiple constructor implementations are not allowed.
        super(author, title);
    }*/
    printDetail() {
        console.log(`author: ${this.author} title: ${this.title} `);
    }
}
function playWithInstanceOf() {
    let book = new Comics('Anonim', 'Leman', 'Sampiyon');
    if (book instanceof SinceFiction) {
        console.log(book.printing);
    }
    else if (book instanceof Comics) {
        console.log(book.subTitle);
    }
    else {
        console.log('No way to go');
    }
}
//# sourceMappingURL=09_inheritance.js.map